/*jshint esversion:6*/
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//connect to DB
const db = mongoose.connect('mongodb://localhost:27017/customercli_db',{useMongoClient:true});

//import model
const Customer = require('./models/customer');



//add Customer


//find Customer