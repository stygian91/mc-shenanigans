const mysql = require('mysql');

const route = require('./route');

module.exports = route({
    validateReq: (req, res) => {
        const regex = /\w[\w\-]*/;
        if (
            !req.params.hasOwnProperty('name') ||
            typeof req.params.name !== 'string' ||
            req.params.name.match(regex) === null
        ) {
            return false;
        }

        for (let coord of ['x', 'y', 'z']) {
            if (!req.query.hasOwnProperty(coord) || isNaN(parseFloat(req.query[coord]))) {
                return false;
            }
        }

        return true;
    },

    sql: (req) => {
        const name = req.params.name.trim();
        const {x, y, z} = req.query;

        return mysql.format(
            "INSERT INTO `locations`(`name`, `x`, `y`, `z`) VALUES(?, ?, ?, ?)",
            [name, x, y, z]
        )
    },
    onSuccess: ({res, dbResults}) => res.send(`Location added successfully.`),
});
