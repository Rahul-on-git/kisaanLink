const mongoose = require("mongoose");

const schema = mongoose.Schema;

/*
truck driver name 
num plate -->unique
latitude longitude of current location curr loc: {lat: "", loni: ""}
lat. longi of destination
total capacity
avail capacity
farmers array of objects containng farmer contact [{farmerContact: ""},{}]*/

const truckSchema = new schema(
    {   
        truckDriverName: {
            type: String,
            required: true
        },
        truckNumberPlate:{
            type: String,
            required: true,
            unique:true
        },
        truckCurrentLocation:{
            Latitude:{
            type: String,
            required: true},
            Longitude:{
            type: String,
            required: true                
            }
        },
        truckDestinationLocation:{
            Latitude:{
            type: String,
            required: true},
            Longitude:{
            type: String,
            required: true                
            }
        },
        truckTotalCapacity:{
            type: String,
            required: true            
        },
        truckAvailableCapacity:{
            type: String,
            required: true            
        },
        farmersInPool:[
            {
                farmerContactNumber : String,
                required:true
            }
        ]
            //farmersdetails //array of objects
            /*add n farmers details. How?*/

        , 
    }, {timestamps:true }
);

module.exports = mongoose.model("Truck",truckSchema);