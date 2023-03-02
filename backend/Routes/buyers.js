const express = require('express');

const router = express.Router();

const buyerController = require('../Controllers/buyers');

router.post('/signup', buyerController.signup);

router.post('/login', buyerController.login);

router.get('/currentUser', buyerController.currentUser);

router.get('/products', (req, res) => {
    // Get product details from the seller's controller file
    const produceDetails = farmerController.takeProduceDetails();
    
    // Send the product details to the client
    res.send(produceDetails);
  });


module.exports = router;


// Define a route to get all products


// Export the router
module.exports = router;
