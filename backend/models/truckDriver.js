const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const truckDriverSchema = new Schema(
    {
     truckDriverName: {
            type: String,
            required: true
        },
     truckDriverContact:{
            type: String,
            required: true,
            unique: true
        },
     truckDriverLocation:{
            type: String,
            required: true
        },
     truckDriverPass:{
            type: String,
            required: true
        }
    }, {timestamps: true }
);

module.exports = mongoose.model( "TruckDriver", truckDriverSchema);