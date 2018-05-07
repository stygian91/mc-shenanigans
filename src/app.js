const path = require('path');
const express = require('express');
const cors = require('cors');

const apiRouter = require('./api/api-router');
const setupMysqlTableSchema = require('./api/setup-table-schema');

class App {
    constructor() {
        this.server = express();
        this.server.use(cors());
        this.server.use('/api', apiRouter);
        this.server.use('/', express.static(path.join(__dirname, '..', 'public')));
    }

    start(port = 3000) {
        setupMysqlTableSchema()
            .then(() => {
                this.server.listen(port, () => console.log(`Listening on port ${port}`));
            }).catch(error => console.error(error));
    }
}

module.exports = App;
