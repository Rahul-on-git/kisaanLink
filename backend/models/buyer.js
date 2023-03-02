const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const buyerSchema = new Schema(
    {
        buyerName: {
            type: String,
            required: true
        },
        buyerContact:{
            type: String,
            required: true,
            unique: true
        },
        buyerLocation:{
            type: String,
            required: true
        },
        buyerPass:{
            type: String,
            required: true
        }
    }, {timestamps: true }
);

module.exports = mongoose.model("Buyer", buyerSchema);