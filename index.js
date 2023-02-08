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
fs.writeFileSync('new.txt','Mahesh created this file');
fs.writeFileSync('new.txt', 'Mahesh created this file using NodeJs');
fs.appendFileSync('new.txt', ' Mahesh created this file.');

var buff=fs.readFileSync('new.txt');
console.log(buff.toString());
fs.renameSync('new.txt','read.txt');

// fs.unlinkSync('read.txt');

var EventEmitter= require('events');
const event=new EventEmitter();

event.on('sayMyName', ()=>{
    console.log('My name is Mahesh');
});

event.emit('sayMyName');

