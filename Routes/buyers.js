const express = require('express');
const router = express.Router();

const buyerController = require('../Controllers/buyers');

router.use('/displayProducts', buyerController.displayProducts);