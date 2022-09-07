'use strict';
const express = require('express');
const personController = require('../controllers/personController');
const authenticate = require('../middlewares/authenticated');

const api = express.Router();

api.post('/save', authenticate.ensureAuth, personController.save);
api.get('/find', authenticate.ensureAuth, personController.getPersons);

module.exports = api;