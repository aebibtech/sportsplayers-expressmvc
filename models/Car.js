const Model = require('./Model');

class Car extends Model{
    async getAllCars(){
        return await this.query('SELECT * FROM cars');
    }
}

module.exports = new Car;