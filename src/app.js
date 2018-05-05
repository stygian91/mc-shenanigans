const path = require('path');
const express = require('express');

const registerApiRoutes = require('./api/register-routes');
const setupMysqlTableSchema = require('./api/setup-table-schema');

class App {
    constructor(port = 3000) {
        this.port = port;
        this.server = express();
    }

    start() {
        return setupMysqlTableSchema()
            .then(() => {
                registerApiRoutes(this.server);
                this.server.use('/', express.static(path.join(__dirname, '..', 'public')));
                this.server.listen(this.port, () => console.log(`Listening on port ${this.port}`));
            }).catch(console.error);
    }
}

module.exports = App;
