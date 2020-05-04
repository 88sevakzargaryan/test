'use strict';



//exports.tes = function () {
//console.log('sevakaryan');
//};

//var a = {type:"Fiat", model: function ()  {return 1}, color:"white"};

/*module.exports = function () {
console.log('sevakaryan');
};

module.exports = function () {
console.log('ryan');
};
*/
//module.exports = function () {
//console.log('1988');
//};


const express = require('express');
const app = express();
 app.use((req, res, next) => {
   res.status(200).json({
    message: 'It works!'
  });
});


module.exports = app;
