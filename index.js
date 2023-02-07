fact=require('./factorial');

console.log("Hello World");
var obj = {
    authorName: 'Ryan Dahl',
    language: 'Node.js'
}
console.log(obj);

fact.factorial(5);

var myLog = require('./utility');

myLog.info('Node.js Started');
myLog.warning('Unable to process request');

var myPerson=require('./Person');

var Person1=new myPerson('Mahesh','Sharma');
console.log(Person1.fullName());

var fs = require('fs');

var data = fs.readFileSync('Test.txt', 'utf8');
console.log(data);

