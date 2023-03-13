const Model = require('./Model');

class Car extends Model{
    getAllCars(){
        return this.fetch_all('SELECT * FROM cars');
    }
}

module.exports = new Car;