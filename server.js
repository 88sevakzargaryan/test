'use strict';

const http = require('http');
const app = require('./app');
var x = require('./requireMe');

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);


//console.log(typeof x);
//console.log(x);

//x();
//console.log(x.testt.model());

//x();

//const http = require('http')

console.log(typeof x);
//console.log(x);
