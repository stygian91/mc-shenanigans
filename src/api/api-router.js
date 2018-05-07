const router = require('express').Router();
const bodyParser = require('body-parser');

const addLocation = require('./routes/add-location');
const getLocation = require('./routes/get-location');
const editLocation = require('./routes/edit-location');
const deleteLocation = require('./routes/delete-location');
const getLocations = require('./routes/get-locations');

router.use(bodyParser.json());

router.post('/locations/:name', addLocation);
router.get('/locations/:name', getLocation);
router.put('/locations/:name', editLocation);
router.delete('/locations/:name', deleteLocation);
router.get('/locations', getLocations);

module.exports = router;
