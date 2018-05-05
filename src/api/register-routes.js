const getLocation = require('./routes/get-location');

module.exports = server => {
    server.use('/api/locations/:name', getLocation);
};
