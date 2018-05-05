const mysql = require('mysql');

const createConnection = require('../create-connection');

module.exports = (req, res, next) => {
    const connection = createConnection();

    return new Promise(resolve => {
        connection.query("SELECT * FROM `locations`", (error, results) => {
            if (error) {
                throw error;
            }

            res.send(JSON.stringify(results));
            resolve();
        });
    }).finally(() => {
        connection.end();
        next();
    });
}
