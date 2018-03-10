/*jshint esversion:6 */
const mongoose = require('mongoose');
const schema = mongoose.Schema;


//create the customer schema
const customerSchema = schema({
firstname : {type:String},
lastname  : {type:String},
phone     : {type:String},
email     : {type:String}
});

//export it as a module
module.exports = mongoose.model('Customer' , customerSchema);