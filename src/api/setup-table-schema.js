const createConnection = require('./create-connection');

const schemas = {
    locations: `
        CREATE TABLE \`locations\` (
          \`name\` varchar(100) CHARACTER SET utf8 NOT NULL PRIMARY KEY,
          \`x\` double NOT NULL,
          \`y\` double NOT NULL,
          \`z\` double NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `,

    users: `
        CREATE TABLE \`users\` (
          \`id\` integer NOT NULL PRIMARY KEY,
          \`name\` varchar(255) CHARACTER SET utf8 NOT NULL UNIQUE,
          \`salt\` char(10) CHARACTER SET ascii NOT NULL,
          \`hash\` char(64) CHARACTER SET ascii NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `,
};

const createTable = (connection, name) => {
    const sql = schemas[name];

    return new Promise(resolve => {
        connection.query(sql, (error, results) => {
            if (error) {
                throw error;
            }

            resolve();
        })
    });
};

module.exports = () => {
    const connection = createConnection();
    const executor = name => (resolve, reject) => {
        connection.query('SHOW TABLES LIKE ?', [name], (error, results) => {
            if (error) {
                throw error;
            }

            if (!results.length) {
                return createTable(connection, name)
                    .finally(() => resolve());
            }

            resolve();
        });
    };

    const promises = Object.keys(schemas).map(name => new Promise(executor(name)));

    return Promise.all(promises)
        .catch(error => console.error(error))
        .finally(() => connection.end());
};
