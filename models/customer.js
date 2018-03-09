/*jshint esversion:6 */
const mongoose = require('mongoose');
const schema = mongoose.schema;


//create the customer schema
const customerSchema = schema({
firstName : {type:String},
lastName  : {type:String},
phone     : {type:String},
email     : {type:String}
});

//export it as a module
module.exports = mongoose.model('Customer' , customerSchema);