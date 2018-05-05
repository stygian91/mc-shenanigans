const mysql = require('mysql');

const createConnection = require('../create-connection');

module.exports = (req, res, next) => {
    const connection = createConnection();

    connection.query("SELECT * FROM `locations` WHERE `name` = ?", [req.params.name], (error, results) => {
        if (error) {
            throw error;
        }

        res.send(JSON.stringify(results));
        next();
    });

    connection.end();
}
