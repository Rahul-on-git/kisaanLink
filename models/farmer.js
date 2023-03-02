const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const farmerSchema = new Schema(
    {
        farmerName: {
            type: String,
            required: true
        },
        farmerContact:{
            type: String,
            required: true,
            unique: true
        },
        farmerLocation:{
            type: String,
            required: true
        },
        farmerPass:{
            type: String,
            required: true
        }
    }, {timestamps: true }
);

module.exports = mongoose.model("Farmer", farmerSchema);