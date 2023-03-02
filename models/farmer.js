const mongoose = require("mongoose");

const schema = mongoose.schema;

const farmerSchema = new schema(
    {
        farmerName: {
            type: String,
            required: true
        },
        farmerContact:{
            type: String,
            required: true
        },
        farmerLocation:{
            type: String,
            required: true
        },
        farmerPass:{
            type: String,
            required: true
        }
    }
);

