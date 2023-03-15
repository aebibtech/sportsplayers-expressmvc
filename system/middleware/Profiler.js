class Profiler{
    profile(){
        return function(request, response, next){
            // div element styles
            const divMarginTop = 'margin-top: 20px;';
            const divOutline = 'outline: 2px solid #333;';
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
                        store += `<p>${getDataParamNames[ind]}: ${getDataValues[ind]}</p>\n`;
                    }
                }else{
                    store += '<p>No data.</p>\n';
                }
                store += '</fieldset>\n';
                return store;
            }

            let getData = generateParamsDisplay('GET DATA', request.query);
            let postData = generateParamsDisplay('POST DATA', request.body);
            request.profiler = `${getData}\n${postData}`;
            next();
        }
    }
}

module.exports = new Profiler;