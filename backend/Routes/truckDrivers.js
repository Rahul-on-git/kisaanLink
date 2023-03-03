const express = require('express');
const router = express.Router();

const truckDriverController = require('../Controllers/truckDrivers');
const validateToken = require('../middlewares/validateTokenHandler');

router.post('/signup', truckDriverController.signup);

router.post('/login', truckDriverController.login);

router.get('/currentUser', validateToken, truckDriverController.currentUser);

// const orders = require('./orders'); 

// // Define a route to get all orders assigned to the agent
// router.get('/orders', (req, res) => {
//   // Get the agent's ID from the request query parameters
//   const agentId = req.query.agentId;
  
//   // Filter the orders to only include those assigned to the agent
//   const agentOrders = orders.filter(order => order.agentId === agentId);
  
//   // Send the agent's orders to the client
//   res.send(agentOrders);
// });

// // Export the router
module.exports = router;

