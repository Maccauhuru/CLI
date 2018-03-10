/*jshint esversion:6*/
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//connect to DB
const db = mongoose.connect("mongodb://localhost:27017/customercli_db");
var conn = mongoose.connection;
conn.on("connect", function() {
  console.log("connected");
});

//import model
const Customer = require("./models/customer");

//add Customer
const addCustomer = customer => {
  Customer.create(customer).then(customer => {
    console.info("New Customer Added");
    db.close();
  });
};

//find Customer
const findCustomer =(name)=> {
    //make the name case-INsensitive
  const search = new RegExp(name,'i');
  Customer.find({$or:[{firstname : search},{lastname : search}]})
    .then(customer => {
    console.info(customer);
    console.info(`${customer.length} matches were found`);
    db.close();
  });
};
//Export the methods
module.exports = { addCustomer , findCustomer };
