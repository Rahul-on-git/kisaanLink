const express = require('express');
const router = express.Router();

const buyerController = require('../Controllers/buyers');

router.get('/displayProducts', buyerController.displayProducts);

module.exports = router;