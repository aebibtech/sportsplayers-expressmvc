const BaseModel = require("../BaseModel");
const config = require('../../application/config');

class Profiler{
    profile(){
        return function(request, response, next){
            if(!request.startTime){
                request.startTime = Date.now();
            }
            // div element styles
            const divMarginTop = 'margin-top: 20px;';
            const divPadding = 'padding: 5px 20px;'
            const divBgColor = 'background-color: #ffb84d';
            const legendStyle = 'font-weight: 600; font-size: 24px;';
            const divStyle = `${divMarginTop} ${divPadding} ${divBgColor}`;

            function generateParamsDisplay(title, requestObject){
                let store = `<fieldset style="${divStyle}">\n<legend style="${legendStyle}">${title}</legend>\n`;
                if(Object.keys(requestObject).length > 0){
                    const getDataParamNames = Object.keys(requestObject);
                    const getDataValues = Object.values(requestObject);
                    for(let ind = 0; ind < getDataParamNames.length; ind++){
                        store += `<p>${getDataParamNames[ind]}: ${typeof getDataValues[ind] === 'object' ? JSON.stringify(getDataValues[ind]) : getDataValues[ind]}</p>\n`;
                    }
                }else{
                    store += '<p>No data.</p>\n';
                }
                store += '</fieldset>\n';
                return store;
            }

            let getData = generateParamsDisplay('GET DATA', request.query);
            let postData = generateParamsDisplay('POST DATA', request.body);
            let sessionData = generateParamsDisplay('SESSION DATA', request.session);
            let lastExecutedQuery = `<fieldset style="${divStyle}">\n<legend style="${legendStyle}">DATABASE</legend>\n`;
            if(BaseModel.lastExecutedQuery.length > 0){
                for(let ind = 0; ind < BaseModel.lastExecutedQuery.length; ind++){
                    lastExecutedQuery += `<p>Called from ${BaseModel.callingClass[ind]} model.</p>\n`;
                    lastExecutedQuery += `<p>${BaseModel.lastExecutedQuery[ind]}</p>\n`;
                }
                BaseModel.lastExecutedQuery = [];
                BaseModel.callingClass = [];
            }else{
                lastExecutedQuery += '<p>No database query done.</p>\n';
            }
            lastExecutedQuery += '</fieldset>\n';
            let configData = generateParamsDisplay('CONFIG PARAMETERS', config);
            let httpHeaders = generateParamsDisplay('HTTP HEADERS', request.headers);
            const profilerData = `${getData}\n${postData}\n${lastExecutedQuery}\n${sessionData}\n${configData}\n${httpHeaders}`;
            
            request.profilerData = profilerData;
            response.render = function(view, options, callback){
                let app = this.req.app;
                let done = callback;
                let opts = options || {};
                let req = this.req;
                let self = this;
                
                // support callback function as second arg
                if (typeof options === 'function') {
                    done = options;
                    opts = {};
                }
                
                // merge res.locals
                opts._locals = self.locals;
                
                // default callback to respond
                done = done || function (err, str) {
                    if(err){
                        return req.next(err);
                    }
                    /*  Deviation from original res.render() method
                        Modified by: Paul
                    */
                    if(req.startTime){
                        req.endTime = Date.now();
                    }
                    let executionTimeData = generateParamsDisplay('BENCHMARKS', {'Total Execution Time' : (req.endTime - req.startTime) + ' ms', 'Memory Usage': Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100 / 100) + ' MB'});
                    let htmlBefore = str.slice(0, str.indexOf('</body>'));
                    if(req.profilerData){
                        // console.log(req.profilerData);
                        htmlBefore += executionTimeData;
                        htmlBefore += req.profilerData;
                    }
                    htmlBefore += '</body>\n</html>\n';
                    self.send(htmlBefore);
                };
                
                // render
                app.render(view, opts, done);
            };
            next();
        }
    }
}

module.exports = new Profiler;