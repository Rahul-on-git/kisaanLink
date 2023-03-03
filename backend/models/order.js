const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    buyerContact: {
        type: String,
        required: true
    }, 
    orderTotalPrice: {
        type: String,
        required: true
    },
    orderItems: [
        {name: String, cost: String}
    ]
})

module.exports = mongoose.model('Order', orderSchema)