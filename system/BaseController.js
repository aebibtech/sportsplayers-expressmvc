const config = require('../application/config');

class BaseController{
    loadView(view, viewData = null){
        return function(request, response){
            response.render(view, viewData, function(error, html){
                let appendedHTML = html.slice(0, html.indexOf('</body>'));
                if(request.profiler){
                    appendedHTML += request.profiler;
                }
                appendedHTML += '</body>\n</html>\n';
                response.send(appendedHTML);
            });
        }
    }
}
module.exports = BaseController;