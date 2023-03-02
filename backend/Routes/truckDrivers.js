const express = require('express');
const router = express.Router();

const truckDriverController = require('../Controllers/truckDrivers');

router.post('/signup', truckDriverController.signup);

router.post('/login', truckDriverController.login);

router.get('/currentUser', truckDriverController.currentUser);


module.exports = router;