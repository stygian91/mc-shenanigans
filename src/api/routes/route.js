const mysql = require('mysql');

const createConnection = require('../create-connection');

const onErrorDefault = (error, req, res) => {
    res
        .status(500)
        .send({ success: false, error: error });
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
        res
            .status(400)
            .send({ success: false, error: { code: 'API_INVALID_ARGS', message: 'Invalid argument(s).' } });
        return;
    }

    const connection = createConnection();

    new Promise((resolve, reject) => {
        connection.query(sql(req), (error, dbResults, fields) => {
            if (error) {
                reject(error);
                return;
            }

            onSuccess({connection, req, res, dbResults, fields})
                .then(() => resolve())
                .catch(error => reject(error));
        });
    })
    .catch(error => {
        onError(error, req, res);
    })
    .finally(() => {
        connection.end();
    });
}
