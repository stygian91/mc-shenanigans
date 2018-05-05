const path = require('path');
const express = require('express');

const apiRouter = require('./api/api-router');
const setupMysqlTableSchema = require('./api/setup-table-schema');

class App {
    constructor(port = 3000) {
        this.port = port;
        this.server = express();
    }

    start() {
        return setupMysqlTableSchema()
            .then(() => {
                this.server.use('/api', apiRouter);
                this.server.use('/', express.static(path.join(__dirname, '..', 'public')));
                this.server.listen(this.port, () => console.log(`Listening on port ${this.port}`));
            }).catch(console.error);
    }
}

module.exports = App;
