const BaseController = require('../../system/BaseController');

class Welcome extends BaseController{
    index(request, response){
        response.render('welcome/index');
    }
}

module.exports = new Welcome;