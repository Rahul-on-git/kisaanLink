const mongoose = require("mongoose");

const schema = mongoose.Schema;

const stockSchema = new schema(
    {   
        produceCategory:{
            type: String,
            required: true,
        },
        produceType:{
            type: String,
            required: true,
            unique:true
        },
        produceQuantity:{
            type: String,
            required: true
        },
        producePerishability:{
            type: String,
            required: true
        },
        produceDesiredPrice:{
            type:String,
            required:true
        }, 
    }, {timestamps:true }
);

module.exports = mongoose.model("Stock",stockSchema);