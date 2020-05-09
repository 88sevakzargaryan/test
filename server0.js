'use strict';

const http = require('http');
const app = require('./app');
var x = require('./requireMe');

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);

//git
//console.log(typeof x);
//console.log(x);

//x();
//console.log(x.testt.model());

//x();

//const http = require('http')

//console.log(typeof x);
//console.log(x);


//console.log(1);

//setTimeout(() => {console.log(2)}, 300);

//console.log(3);
/*
console.log(11);
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('22')}, 2000);

})

promise1.then((value) => {
  console.log(value);
  console.log(33);
}) */

console.log(11);

async function print() {

  const pr = await setTimeout(() => {console.log('22');}, 2000);
  console.log(33);
}

print();
