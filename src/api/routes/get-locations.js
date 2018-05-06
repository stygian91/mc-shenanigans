const mysql = require('mysql');

const route = require('./route');

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
    let sqlString = "SELECT * FROM `locations` WHERE 1=1 ";

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

    return mysql.format(sqlString, inserts);
};

module.exports = route({
    sql,
    onSuccess: ({res, dbResults}) => res.send(JSON.stringify(dbResults)),
});
