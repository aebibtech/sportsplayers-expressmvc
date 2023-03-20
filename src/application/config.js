// Configuration parameters
const config = {
    PORT: 3000,
    DATABASE_SYSTEM: 'mysql', // Options: mysql, postgres, mongodb
    MYSQL_CONFIG: {
        host: 'db',
        user: 'root',
        password: 'password',
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
    SESSION_ON_REDIS: false,
    REDIS_CONFIG: {
        host: '127.0.0.1',
        port: 6379,
        ttl: 86400
    },
    ENABLE_PROFILER: false // disable this on production, pretty please.
};

module.exports = config;