const BaseController = require('../../system/BaseController');

class Welcome extends BaseController{
    index(){
        return this.loadView('welcome/index');
    }
}

module.exports = new Welcome;