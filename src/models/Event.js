'use strict';
const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Event', EventSchema);