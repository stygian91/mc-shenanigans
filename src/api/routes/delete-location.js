const mysql = require('mysql');

const route = require('./route');

module.exports = route({
    sql: (req) => "DELETE FROM `locations` WHERE `name` = " + mysql.escape(req.params.name),
    onSuccess: ({res, dbResults}) => new Promise((resolve, reject) => {
        if (!dbResults.affectedRows) {
            reject({
                code: 'API_NOT_FOUND',
                message: `Item not found.`,
            });
            return;
        }

        res.send({ success: true });
        resolve();
    }),

    onError: (error, req, res) => {
        res.status(500);
        if (error.code === 'API_NOT_FOUND') {
            res.status(404);
        }

        res.send({ success: false, error: error });
    },
});
