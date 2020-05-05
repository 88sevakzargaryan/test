

const express = require('express');

const app = express();
//const morgan = require('morgan');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const productRouts = require('./api/routes/products')

const orderRouts = require('./api/routes/orders')

const morgan = require('morgan');
/*
mongoose.connect('mongodb+srv://sevak:' + process.env.MONGO_ATLAS_PW +'@cluster0-3wqzf.mongodb.net/test?retryWrites=true&w=majority',
{
useUnifiedTopology: true,
  useMongoClient: true
}
);
*/
app.use(morgan('dev'));
mongoose.connect('mongodb+srv://sevak:' + process.env.MONGO_ATLAS_PW +'@cluster0-3wqzf.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
console.log('Mongoose is connected!!!');
});




app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/products', productRouts);

app.use('/orders', orderRouts);
//app.use('/posturl',productRouts);

module.exports = app;
