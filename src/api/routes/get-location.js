const mysql = require('mysql');

const route = require('./route');

module.exports = route({
    sql: (req) => "SELECT * FROM `locations` WHERE `name` = " + mysql.escape(req.params.name),
    onSuccess: ({res, dbResults}) => res.send(JSON.stringify(dbResults)),
});
