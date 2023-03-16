const BaseModel = require('../../system/BaseModel');

class Sport extends BaseModel{
    getAllSports(){
        return this.fetch_all('SELECT id,sport_name FROM sports');
    }
}

module.exports = new Sport;