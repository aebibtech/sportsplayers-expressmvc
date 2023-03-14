class BaseModel{
    constructor(){
        const config = require('../config/config');
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
            function queryHandler(err, result) {
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            }
            connLoc.query(query, parameters, queryHandler);
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