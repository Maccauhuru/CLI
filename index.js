/*jshint esversion:6*/
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//connect to DB
const db = mongoose.connect("mongodb://localhost:27017/customercli_db");


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

//Update customer
const updateCustomer=(_id,customer)=>{
      Customer.update({_id},customer)
      .then(customer =>{
        console.info('Customer Updated');
        db.close();
      });

};

//Remove customer
const removeCustomer = (_id) => {
  Customer.remove({ _id }).then(customer => {
    console.info("Customer Removed");
    db.close();
  });
};

//List all Customers
const showCustomers =()=>{
Customer.find()
.then(customers =>{
  console.info(customers);
  console.info(`${customers.length} customers`);
  db.close();
});
};

//Export the methods
module.exports = { addCustomer , findCustomer ,updateCustomer,removeCustomer,showCustomers};
