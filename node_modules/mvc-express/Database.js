const config = require('../application/config');
const mysql = require('mysql2');
const { Client } = require('pg');

let connection = null;

if(config.DATABASE_SYSTEM === 'mysql'){
    connection = mysql.createConnection(config.MYSQL_CONFIG);
}

if(config.DATABASE_SYSTEM === 'postgres'){
    connection = new Client(config.POSTGRES_CONFIG);
    connection.connect(function(error){
        if(error){
            console.log('PostgreSQL error: ', error);
        }else{
            console.log('PostgreSQL connected. Connection parameters', JSON.stringify(config.POSTGRES_CONFIG));
        }
    });
}

module.exports = connection;