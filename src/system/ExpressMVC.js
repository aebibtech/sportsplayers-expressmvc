const config = require('../application/config');
const express = require('express');
const app = express();
const path = require('path');
const routes = require('../application/routes');

/* SESSION */
const session = require('express-session');
if(!config.SESSION_ON_REDIS){
    app.use(session(config.SESSION_CONFIG));
}else{
    const redis = require('redis');
    const RedisStore = require('connect-redis').default;
    const redisClient = redis.createClient(config.REDIS_CONFIG);
    redisClient.connect().then(function(){
        console.log('Connected to redis. Redis config:', config.REDIS_CONFIG);
    }).catch(console.error);
    app.use(session({
        secret: config.SESSION_CONFIG.secret,
        resave: config.SESSION_CONFIG.resave,
        saveUninitialized: config.SESSION_CONFIG.saveUninitialized,
        cookie: { secure: false },
        store: new RedisStore({ client: redisClient })
    }));
}

/* BODY PARSER */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

/* This is where your static assets should be stored. */
app.use(express.static(path.join(__dirname, '../assets')));

/* views */
app.set('views', path.join(__dirname, '../application/_views'));
app.set('view engine', 'ejs');

// /* Profiler */
if(config.ENABLE_PROFILER){
    const profiler = require('./middleware/Profiler');
    app.use(profiler);
}

/* DO NOT CHANGE - define your routes in the routes.js file */
app.use('/', routes);

function start(){
    app.listen(config.PORT, function(){
        console.log(`Listening at port ${config.PORT}...`);
    });
}

module.exports = start;