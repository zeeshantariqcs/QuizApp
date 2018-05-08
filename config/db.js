"use_strict";

//Database Connectivity
const mongoose = require('mongoose');
const config = require('../config/config');
mongoose.Promise = require('bluebird');
mongoose.connect(config.database);

//Get the default connection
var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var dbError = function () {
    console.log("[DATABASE] MongoDB connection error");
};
db.on('error', dbError);