'use strict';
const express = require('express');
const cors = require('cors');

const app = express();

//load routes
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const delegationRoutes = require('./routes/delegationRoutes');
const eventRoutes = require('./routes/eventRoutes');
const flyListRoutes = require('./routes/flyListRoutes');

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//cors
app.use(cors());




//routes
app.use('/api/user', userRoutes);
app.use('/api/role', roleRoutes);
app.use('/api/delegation', delegationRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/flyList', flyListRoutes);

//exports
module.exports = app;



