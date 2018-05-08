const mysql = require('mysql');

const validateReq = require('../utils').validateLocationReq;
const route = require('./route');

module.exports = route({
    validateReq,

    sql: (req) => {
        const name = req.params.name.trim();
        const {x, y, z} = req.body;

        return mysql.format(
            "UPDATE `locations` SET `x` = ?, `y` = ? , `z` = ? WHERE `name` = ?",
            [x, y, z, name]
        )
    },
    onSuccess: ({res, dbResults}) => new Promise(resolve => {
        res.send({ success: true });
        resolve();
    }),
});
