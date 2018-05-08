const mysql = require('mysql');

const route = require('./route');

module.exports = route({
    sql: (req) => "DELETE FROM `locations` WHERE `name` = " + mysql.escape(req.params.name),
    onSuccess: ({res, dbResults}) => new Promise(resolve => {
        res.send(dbResults);
        resolve();
    }),
});
