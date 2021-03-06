const mysql = require('mysql');

const validateReq = require('../utils').validateLocationReq;
const route = require('./route');

module.exports = route({
    validateReq,

    sql: (req) => {
        const name = req.params.name.trim();
        const {x, y, z} = req.body;

        return mysql.format(
            "INSERT INTO `locations`(`name`, `x`, `y`, `z`) VALUES(?, ?, ?, ?)",
            [name, x, y, z]
        )
    },
    onSuccess: ({res, dbResults}) => new Promise(resolve => {
        res.send({ success: true });
        resolve();
    }),

    onError: (error, req, res) => {
        let status;

        switch (error.code) {
            case 'ER_DUP_ENTRY':
                status = 409;
            break;

            default:
                status = 500;
            break;
        }

        res
            .status(status)
            .send({success: false, error: {code: error.code, message: error.sqlMessage}});
    },
});
