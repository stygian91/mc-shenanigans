const path = require('path');
const express = require('express');
const cors = require('cors');
const Docs = require('express-api-doc');

const apiRouter = require('./api/api-router');
const setupMysqlTableSchema = require('./api/setup-table-schema');

class App {
    constructor() {
        this.server = express();
        const dock = new Docs(this.server);
        dock.track({
            path: path.join(__dirname, '../public/examples.txt'),
        });
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
