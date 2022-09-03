'use strict';
const express = require('express');
const roleController = require('../controllers/roleController');
const authenticate = require('../middlewares/authenticated');

const api = express.Router();

api.post('/save', authenticate.ensureAuth, roleController.save);

module.exports = api;