const Controller = require('../system/Controller');

class Cars extends Controller{
    async index(request, response){
        if(!request.session.timesVisited){
            request.session.timesVisited = 1;
        }else{
            request.session.timesVisited++;
        }
        const Car = require('../models/Car');
        let allCars = await Car.getAllCars();
        console.log('cars:', allCars);
        response.render('index', {cars: allCars, timesVisited: request.session.timesVisited});
    }
    reset(request, response){
        request.session.destroy();
        response.redirect('/');
    }
}

module.exports = new Cars;