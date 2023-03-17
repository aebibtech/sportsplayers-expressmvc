// Configuration parameters
const config = {
    PORT: 8888,
    DATABASE_SYSTEM: 'postgres', // Options: mysql, postgres, redis, mongodb
    MYSQL_CONFIG: {
        host: 'db4free.net',
        user: 'paulaebib',
        password: 'camano123123',
        database: 'expressmvc'
    },
    POSTGRES_CONFIG: {
        host: 'ep-polished-tree-148496.ap-southeast-1.aws.neon.tech',
        port: 5432,
        user: 'aebibtech',
        password: 'kf5q3FSHvLsT',
        database: 'expressmvc',
        ssl: true
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