const mysql = require('mysql');

module.exports = () => {
    const env = process.env;
    
    return mysql.createConnection({
        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASS,
        database: env.DB_NAME,
        port: env.DB_PORT
    });
}