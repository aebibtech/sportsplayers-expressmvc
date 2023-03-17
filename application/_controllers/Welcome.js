const connection = require('../../system/Database');

class Welcome{
    index(request, response){
        response.render('welcome/index');
    }
}

module.exports = new Welcome;