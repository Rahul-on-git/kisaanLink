const express = require('express');
const router = express.Router();

const farmerController = require('../Controllers/farmer');

router.post('/signup', farmerController.signup);

router.post('/login', farmerController.login);

router.get('/currentUser', farmerController.currentUser);

router.post('/takeProduceDetails', farmerController.takeProduceDetails);

module.exports = router;