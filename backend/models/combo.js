const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const comboSchema = new Schema(
    {
        comboName: {
            type: String,
            required: true
        },
        comboPrice:{
            type: String,
            required: true,
        },
        comboPerishability:{
            type: String,
            required: true
        }
    }, {timestamps: true }
);

module.exports = mongoose.model("Combo", comboSchema);