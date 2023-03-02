const express = require("express");
const app = express();

const farmersRoutes = require("./Routes/farmers");
const buyersRoutes = require('./Routes/buyers')

const bodyParser = require("body-parser");
app.use(bodyParser.json())

// Removal of CORS error
app.use( (req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Origin","GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Origin","Content-Type, Authorization");
    next();
} )

// Route grps
app.use('/farmers', farmersRoutes);
app.use('/buyers', buyersRoutes);
// app.use('truckD', truckDriverRoutes);

port = 4000;
app.listen(port)