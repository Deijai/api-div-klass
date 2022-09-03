'use strict';
const mongoose = require('mongoose');

const DelegationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: true 
    }
});

module.exports = mongoose.model('Delegation', DelegationSchema);