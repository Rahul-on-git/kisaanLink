const express = require('express');

const router = express.Router();

const buyerController = require('../Controllers/buyers');
const validateToken = require('../middlewares/validateTokenHandler');

router.post('/signup', buyerController.signup);

router.post('/login', buyerController.login);

router.get('/currentUser', validateToken, buyerController.currentUser);

router.post('/order', validateToken, buyerController.order);

router.get('/products', buyerController.displayProducts);

router.get('/products/:id', buyerController.displayProduct);

router.get('/product/:type', buyerController.displayType);

module.exports = router;