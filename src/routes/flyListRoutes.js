'use strict';
const express = require('express');
const flyListController = require('../controllers/flyListController');
const authenticate = require('../middlewares/authenticated');

const api = express.Router();

api.post('/save', authenticate.ensureAuth, flyListController.save);
api.get('/find', authenticate.ensureAuth, flyListController.getFlyList);

module.exports = api;