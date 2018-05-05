const mysql = require('mysql');

const createConnection = require('../create-connection');

module.exports = ({sql, onSuccess}) => (req, res) => {
    const connection = createConnection();

    return new Promise(resolve => {
        connection.query(sql(req), (error, dbResults, fields) => {
            if (error) {
                res.status(500);
                res.send(`An error occured.`);
                resolve();
            }

            onSuccess({req, res, dbResults, fields});
            resolve();
        });
    }).finally(() => {
        connection.end();
    });
}
