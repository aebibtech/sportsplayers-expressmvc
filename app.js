const config = require('./config');
const express = require('express');
const app = express();

/* SESSION */
const session = require('express-session');
app.use(session(config.SESSION_CONFIG));

/* BODY PARSER */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

/* This is where your static assets should be stored. */
app.use(express.static(__dirname + '/assets'));

/* views */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/* DO NOT CHANGE - define your routes in the routes.js file */
const routes = require('./routes');
app.use('/', routes);

app.listen(config.PORT, function(){
    console.log(`Listening at port ${config.PORT}.`);
});