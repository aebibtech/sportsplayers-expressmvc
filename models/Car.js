const BaseModel = require('../system/BaseModel');

class Car extends BaseModel{
    getAllCars(){
        return this.fetch_all('SELECT * FROM cars');
    }
}

module.exports = new Car;