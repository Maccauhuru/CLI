/* jshint esversion:6 */
const program = require('commander');
const { prompt } = require('inquirer');
const {addCustomer , findCustomer ,updateCustomer,removeCustomer,showCustomers} = require('./index');

//Customer questions
const questions = [{
    type :'input',
    name:'firstname',
    message:'Customer First Name'
},
{
    type: 'input',
    name: 'lastname',
    message:'Customer Last Name'
},
{
    type: 'input',
    name: 'phone',
    message:'Customer Phone Number'
},
{
    type: 'input',
    name: 'email',
    message:'Customer Email Address'
}
];

program
.version('1.0.0')
.description('Client Management System');


// program
// .command('add <firstname> <lastname> <phone> <email>')
// .alias('a')
// .description('Add a new customer')
// .action((firstname,lastname,phone,email)=>{
// addCustomer({firstname,lastname,phone,email});
// });

//Add command
program
.command('add')
.alias('a')
.description('Add a new customer')
.action(()=>{
    prompt(questions).then(answers =>addCustomer(answers));
});

//Find command
program
.command('find <name>')
.alias('f')
.description('Find a customer')
.action((name)=>findCustomer(name));

//Update command
program
.command('update <_id>')
.alias('u')
.description('Update a customer')
.action(()=>{
   prompt(questions).then(answers => addCustomer(_id,answers));
});


program.parse(process.argv);