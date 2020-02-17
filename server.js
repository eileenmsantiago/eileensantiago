const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');

const app = express(); 


// middleware  
app.use(bodyParser.json());

// configure database 
const db = require()


// connect to Mongo 
mongoose
    .connect(db)
