class Model{
    constructor(){
        const config = require('../config/config');
        const mysql = require('mysql2');
        this.connection = mysql.createConnection(config.MYSQL_CONFIG);
    }
    /** Basic Execute Query function **/
    query(query) {
        const connLoc = this.connection;
        return new Promise(function(resolve, reject){
            connLoc.query(query, function (err, result) {
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });	
    }
    async fetch_all(query){
        return await this.query(query);
    }
    async fetch_record(query){
        const result = await this.query(query);
        return result ? result[0] : null;
    }
}

module.exports = Model;