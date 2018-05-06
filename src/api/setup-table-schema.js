const createConnection = require('./create-connection');

// TODO: remove hardcoded table name

const createTable = connection => {
    const sql = `
        CREATE TABLE \`locations\` (
          \`name\` varchar(100) CHARACTER SET utf8 NOT NULL PRIMARY KEY,
          \`x\` double NOT NULL,
          \`y\` double NOT NULL,
          \`z\` double NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `;

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

    return new Promise(resolve => {
        connection.query('SHOW TABLES LIKE ?', ['locations'], (error, results) => {
            if (error) {
                throw error;
            }

            if (!results.length) {
                return createTable(connection);
            }

            resolve();
        });
    })
    .catch(console.error)
    .finally(() => connection.end());
};
