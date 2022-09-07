'use strict';
const express = require('express');
const roleController = require('../controllers/roleController');
const authenticate = require('../middlewares/authenticated');

const api = express.Router();

api.post('/save', authenticate.ensureAuth, roleController.save);
api.get('/find', authenticate.ensureAuth, roleController.getRoles);

module.exports = api;