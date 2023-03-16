const BaseController = require('../../system/BaseController');
const connection = require('../../system/Database');

class Welcome extends BaseController{
    index(request, response){
        response.render('welcome/index');
    }
}

module.exports = new Welcome;