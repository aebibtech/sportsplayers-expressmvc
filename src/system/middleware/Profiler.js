const BaseModel = require("../BaseModel");
const config = require('../../application/config');

// div element styles
const divMarginTop = 'margin-top: 20px;';
const divPadding = 'padding: 5px 20px;'
const divBgColor = 'background-color: #ffb84d';
const legendStyle = 'font-weight: 600; font-size: 24px;';
const divStyle = `${divMarginTop} ${divPadding} ${divBgColor}`;

class Profiler{
    static generateParamsDisplay(title, requestObject){
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

    markStartTime(request, response, next){
        request.profiler = {};
        request.profiler.startTime = Date.now();
        next();
    }

    appendGetData(request, response, next){
        request.profiler.getData =  Profiler.generateParamsDisplay('GET DATA', request.query);
        next();
    }

    appendPostData(request, response, next){
        request.profiler.postData = Profiler.generateParamsDisplay('POST DATA', request.body);
        next();
    }

    appendSessionData(request, response, next){
        request.profiler.sessionData = Profiler.generateParamsDisplay('SESSION DATA', request.session);
        next();
    }

    appendDatabaseQueries(request, response, next){
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
        request.profiler.databaseQueries = lastExecutedQuery;
        next();
    }

    appendConfigData(request, response, next){
        request.profiler.configData = Profiler.generateParamsDisplay('CONFIG PARAMETERS', config);
        next();
    }

    appendHTTPHeaders(request, response, next){
        request.profiler.httpHeaders = Profiler.generateParamsDisplay('HTTP HEADERS', request.headers);
        next();
    }

    appendProfilerData(request, response, next){
        request.profilerData = `${request.profiler.getData}\n${request.profiler.postData}\n${request.profiler.databaseQueries}\n${request.profiler.sessionData}\n${request.profiler.configData}\n${request.profiler.httpHeaders}`;
        next();
    }

    hookRenderMethod(request, response, next){
        // hook the orignal res.render() method from Express repo
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
                if(req.profiler.startTime){
                    req.profiler.endTime = Date.now();
                }
                let executionTimeData = Profiler.generateParamsDisplay('BENCHMARKS', {'Total Execution Time' : (req.profiler.endTime - req.profiler.startTime) + ' ms', 'Memory Usage': Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100 / 100) + ' MB'});
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

const profiler = new Profiler();

module.exports = [
    profiler.markStartTime,
    profiler.appendGetData,
    profiler.appendPostData,
    profiler.appendSessionData,
    profiler.appendConfigData,
    profiler.appendHTTPHeaders,
    profiler.appendDatabaseQueries,
    profiler.appendProfilerData,
    profiler.hookRenderMethod
];