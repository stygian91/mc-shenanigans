const path = require('path');
const Docs = require('express-api-doc');
const App = require('./app');
const app = new App();
const docs = new Docs(app.server);

docs.generate({ path: path.join(__dirname, '..', 'public/docs.html') });
