const mongoose = require("mongoose");

const schema = mongoose.schema;

const stockSchema = new schema(
    {
        stockType:{
            type: String,
            required: true,
            unique:true
        }
    }
);