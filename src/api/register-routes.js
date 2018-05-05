const getLocation = require('./routes/get-location');
const getLocations = require('./routes/get-locations');

// TODO: remove hardcoded 'api' prefix and use configuration for it
module.exports = server => {
    server.get('/api/locations/:name', getLocation);
    server.get('/api/locations', getLocations);
};
