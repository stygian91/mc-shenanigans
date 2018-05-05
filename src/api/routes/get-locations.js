const route = require('./route');

module.exports = route({
    sql: () => "SELECT * FROM `locations`",
    onSuccess: ({res, dbResults}) => res.send(JSON.stringify(dbResults)),
});
