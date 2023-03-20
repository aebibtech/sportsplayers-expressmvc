class Welcome{
    index(request, response){
        response.render('welcome/index');
    }
}

module.exports = new Welcome;