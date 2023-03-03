const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    buyerContact: {
        type: String,
        required: true
    }, 
    orderTotal: {
        type: Number,
        required: true
    },
    orderItems: [
        {name: String, cost: Number}
    ]
})

module.exports = mongoose.model('Order', orderSchema)