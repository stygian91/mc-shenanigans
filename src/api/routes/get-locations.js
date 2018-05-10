const mysql = require('mysql');

const route = require('./route');
// TODO: make this a default value and get per page from request if it has it
const perPage = require('../config').locationsPerPage;

const parseRange = (query, key) => {
    if (!query.hasOwnProperty(key) || typeof query[key] !== 'string') {
        return null;
    }

    const range = query[key].split(':')
        .slice(0, 2)
        .map(parseFloat)
        .filter(boundry => !isNaN(boundry));

    if (!Array.isArray(range) || range.length !== 2) {
        return null;
    }

    if (range[0] > range[1]) {
        return null;
    }

    return range;
}

const sql = (req) => {
    let sqlString = "SELECT SQL_CALC_FOUND_ROWS * FROM `locations` WHERE 1=1 ";

    // add range constraints if any:
    const ranges = {
        x: parseRange(req.query, 'range_x'),
        y: parseRange(req.query, 'range_y'),
        z: parseRange(req.query, 'range_z'),
    };

    let inserts = [];

    for (let coord in ranges) {
        const range = ranges[coord];
        if (!Array.isArray(range)) {
            continue;
        }

        sqlString += ' AND ( ?? >= ? AND ?? <= ? ) ';
        inserts = inserts.concat([coord, range[0], coord, range[1]]);
    }

    // add ordering
    sqlString += " ORDER BY `name` ASC ";

    // add paging
    let page = parseInt(req.query.page);
    if (isNaN(page) || page < 1) {
        page = 1;
    }

    const offset = (page - 1) * perPage;
    const limit = ` LIMIT ${offset}, ${perPage} `;
    sqlString += limit;

    return mysql.format(sqlString, inserts);
};

module.exports = route({
    sql,
    onSuccess: ({connection, res, dbResults}) => new Promise(resolve => {
        connection.query("SELECT FOUND_ROWS()", (error, foundRowResults) => {
            if (error) {
                reject(error);
                return;
            }

            if (!foundRowResults.length || !foundRowResults[0].hasOwnProperty('FOUND_ROWS()')) {
                reject('Error while trying to find total number of results.');
                return;
            }

            const totalResults = foundRowResults[0]['FOUND_ROWS()'];
            const totalPages = Math.ceil(totalResults / parseFloat(perPage));
            res.send({totalPages, locations: dbResults});
            resolve();
        });
    }),
});
