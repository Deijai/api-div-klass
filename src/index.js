'use strict';
const mongoose = require('mongoose');
const app  = require('./app');
const port  = 3100;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/database-divklass', {
    useNewUrlParser: true
}).then( () => {
    console.log('====================================');
    console.log('connected success...');
    console.log('====================================');

    //create server
    app.listen( port, () => {
        console.log('connected port', port);
    } )
}).catch( ( err ) => {
    console.log('====================================');
    console.log('Error: ', err);
    console.log('====================================');
});
