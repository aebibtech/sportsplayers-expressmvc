// Configuration parameters
const config = {
    PORT: 5000,
    MYSQL_CONFIG: {
        host: 'db4free.net',
        user: 'paulaebib',
        password: 'camano123123',
        database: 'expressmvc'
    },
    SESSION_CONFIG: {
        secret: 'keyboardkitteh',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    },
    ENABLE_PROFILER: true
};

module.exports = config;