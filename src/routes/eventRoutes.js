'use strict';
const express = require('express');
const eventController = require('../controllers/eventController');
const authenticate = require('../middlewares/authenticated');

const api = express.Router();

api.post('/save', authenticate.ensureAuth, eventController.save);

module.exports = api;