const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const routes = require('./routes');
/* This is where your assets should be stored. */
app.use(express.static(__dirname + '/assets'));

/* views */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/* DO NOT CHANGE - define your routes in the routes.js file */
app.use('/', routes);

app.listen(config.PORT, function(){
    console.log(`Listening at port ${config.PORT}.`);
});