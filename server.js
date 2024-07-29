const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
require('./models');
const routes = require('./routes')

const morgan = require ( 'morgan' )
app.use(morgan(':remote-addr[:date[clf]]" :method :url HTTP/:http-version" :status :req[content-length] :res[content-length]'));

app.use(express.urlencoded({ extended: false })) 
app.use(express.json())

app.use(routes);
app.get('/', (_req, res) => res.send('Hello server'));

mongoose
.connect(process.env.MONGO_URL)
.then((_res) => {
  console.log('-------------------');
  console.log('Connect mongoDB');
  app.listen(process.env.PORT, err => {
    err ? console.log(err) : console.log('Express listeningpot: ' + process.env.PORT);
    console.log('-------------------');
  });
}).catch((err => console.log(err)));