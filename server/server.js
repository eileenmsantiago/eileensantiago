const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const port = process.env.Port || 5000; 
const cors = require("cors");
const app = express(); 

//import the route
const entriesRouter = require("./routes/entries")
const usersRouter = require("./routes/users")

app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

// middleware  
app.use(bodyParser.json());

// configure database 
const db = require()


// connect to Mongo 
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('PaperSpaceDB Connected...'))
    .catch(err => console.log(err));

// configure database 
const db = 'mongodb+srv://paperspace:paperspace2020@cluster0-axzl6.mongodb.net/PaperSpace?retryWrites=true&w=majority';


//connecting the backend routing
app.use("/entries", entriesRouter);

app.listen(port, () => console.log(`Server started on port ${port} `));
