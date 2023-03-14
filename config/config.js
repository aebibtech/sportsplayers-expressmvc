// Configuration parameters
const config = {
    PORT: 8000,
    MYSQL_CONFIG: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'express_mvc'
    },
    SESSION_CONFIG: {
        secret: 'keyboardkitteh',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    }
};

module.exports = config;