const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedTo: {
        type: String,
        required: true
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)
