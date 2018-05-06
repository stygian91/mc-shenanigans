const mysql = require('mysql');

const createConnection = require('../create-connection');

const onErrorDefault = (error, req, res) => {
    res
        .status(500)
        .send(`An error occured.`);
};

const validateReqDefault = (req, res) => true;

module.exports =
({
    sql,
    onSuccess,
    onError = onErrorDefault,
    validateReq = validateReqDefault,
}) => (req, res) => {
    if (!validateReq(req, res)) {
        return;
    }

    const connection = createConnection();

    new Promise(resolve => {
        connection.query(sql(req), (error, dbResults, fields) => {
            if (error) {
                onError(error, req, res);
                resolve();
            }

            onSuccess({req, res, dbResults, fields});
            resolve();
        });
    }).finally(() => {
        connection.end();
    });
}
