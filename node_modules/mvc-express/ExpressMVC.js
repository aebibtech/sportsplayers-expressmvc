const config = require('../config/config');
const express = require('express');
const app = express();
const path = require('path');

/* SESSION */
const session = require('express-session');
app.use(session(config.SESSION_CONFIG));

/* BODY PARSER */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

/* This is where your static assets should be stored. */
app.use(express.static(path.join(__dirname, '../assets')));

/* views */
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

/* DO NOT CHANGE - define your routes in the routes.js file */
const routes = require('../config/routes');
app.use('/', routes);

function start(){
    app.listen(config.PORT, function(){
        console.log(`Listening at port ${config.PORT}...`);
    });
}

module.exports = start;