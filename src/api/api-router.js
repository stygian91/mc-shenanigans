const router = require('express').Router();

const getLocation = require('./routes/get-location');
const getLocations = require('./routes/get-locations');

router.get('/locations/:name', getLocation);
router.get('/locations', getLocations);

module.exports = router;
