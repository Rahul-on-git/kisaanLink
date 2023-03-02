const express = require('express');

const router = express.Router();

const buyerController = require('../Controllers/buyers');

router.post('/signup', buyerController.signup);

router.post('/login', buyerController.login);

router.get('/currentUser', buyerController.currentUser);

router.get('/displayProducts', buyerController.displayProducts);

module.exports = router;