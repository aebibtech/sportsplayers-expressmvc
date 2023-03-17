const connection = require('./Database');
const PostgresFormat = require('./helpers/PostgresFormat');

class BaseModel{
    static lastExecutedQuery = [];
    static callingClass = [];
    constructor(){
        this.connection = connection;
    }
    format(query, parameters){
        if(this.connection.constructor.name === 'Connection'){ // MySQL
            return this.connection.format(query, parameters);
        }
        if(this.connection.constructor.name === 'Client'){ // PostgreSQL
            return PostgresFormat.format(query, parameters);
        }
    }
    /** Basic Execute Query function **/
    query(query, parameters = null){
        const connLoc = this.connection;
        const fullQuery = this.format(query, parameters);
        BaseModel.lastExecutedQuery.push(fullQuery);
        BaseModel.callingClass.push(this.constructor.name);
        if(connLoc.constructor.name === 'Connection'){
            return new Promise(function(resolve, reject){
                connLoc.query(fullQuery, function(err, result){
                    try{
                        resolve(result);
                    }catch(e){
                        reject(e);
                    }
                });
            });
        }
        if(connLoc.constructor.name === 'Client'){
            try{
                if(query.indexOf('?') !== undefined){
                    query = PostgresFormat.MySQLQueryToPostgreSQLQuery(query);
                }
                return connLoc.query({text: query, values: parameters});
            }catch(e){
                return e;
            }
        }
    }
    async fetch_all(query, parameters = null){
        const allData = await this.query(query, parameters); 
        if(this.connection.constructor.name === 'Connection'){
            return allData;
        }
        if(this.connection.constructor.name === 'Client'){
            return allData.rows;
        }
    }
    async fetch_record(query, parameters = null){
        const record = await this.query(query, parameters);
        if(this.connection.constructor.name === 'Connection'){
            return record[0];
        }
        if(this.connection.constructor.name === 'Client'){
            return record.rows[0];
        }
    }
    async insert(query, parameters){
        let insertData = null;
        if(this.connection.constructor.name === 'Connection'){
            insertData = await this.query(query, parameters);
            return insertData.insertId;
        }
        if(this.connection.constructor.name === 'Client'){
            insertData = await this.query(query + ' RETURNING id', parameters);
            return insertData.rows[0].id;
        }
    }
}

module.exports = BaseModel;