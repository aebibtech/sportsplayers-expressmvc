class BaseModel{
    constructor(){
        const config = require('../application/config');
        const mysql = require('mysql2');
        this.connection = mysql.createConnection(config.MYSQL_CONFIG);
    }
    escape(value){
        return this.connection.escape(value);
    }
    /** Basic Execute Query function **/
    query(query, parameters = null) {
        const connLoc = this.connection;
        return new Promise(function(resolve, reject){
            connLoc.query(query, parameters, function(err, result){
                try{
                    resolve(result);
                }catch(e){
                    reject(err);
                }
            });
        });	
    }
    async fetch_all(query, parameters = null){
        return await this.query(query, parameters);
    }
    async fetch_record(query, parameters = null){
        const result = await this.query(query, parameters);
        return result ? result[0] : null;
    }
    async insert(query, parameters){
        const insertData = await this.query(query, parameters);
        return insertData.insertId;
    }
}

module.exports = BaseModel;