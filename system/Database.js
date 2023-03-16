const config = require('../application/config');
const mysql = require('mysql2');
const connection = mysql.createConnection(config.MYSQL_CONFIG);

module.exports = connection;