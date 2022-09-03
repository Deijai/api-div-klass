'use strict';
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    role:  {
        type: mongoose.Schema.ObjectId, ref: 'Role'
    }
});

module.exports = mongoose.model('User', UserSchema);