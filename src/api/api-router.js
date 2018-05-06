const router = require('express').Router();

const addLocation = require('./routes/add-location');
const getLocation = require('./routes/get-location');
const getLocations = require('./routes/get-locations');

router.post('/locations/:name', addLocation);
router.get('/locations/:name', getLocation);
router.get('/locations', getLocations);

module.exports = router;
