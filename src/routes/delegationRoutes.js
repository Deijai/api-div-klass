'use strict';
const express = require('express');
const delegationController = require('../controllers/delegationController');
const authenticate = require('../middlewares/authenticated');

const api = express.Router();

api.post('/save', authenticate.ensureAuth, delegationController.save);
api.get('/find', authenticate.ensureAuth, delegationController.getDelegations);

module.exports = api;