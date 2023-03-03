const express = require('express');
const router = express.Router();

const farmerController = require('../Controllers/farmers');
const validateToken = require('../middlewares/validateTokenHandler');

router.post('/signup', farmerController.signup);

router.post('/login', farmerController.login);

router.get('/currentUser', validateToken , farmerController.currentUser);

router.post('/takeProduceDetails', farmerController.takeProduceDetails);

module.exports = router;