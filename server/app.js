const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const serverless = require("serverless-http");
// const cors = require("cors");

// Instances
const basePath = '/.netlify/functions/app/';

const app = express(); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
// app.use(cors());
console.log(basePath)
// const router = express.Router();

// configure/connect to Mongo Database 
const db = 'mongodb+srv://paperspace:paperspace2020@cluster0-axzl6.mongodb.net/EileenSantiago?retryWrites=true&w=majority';
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Eileen Santiago Portfolio Connected to PaperSpaceDB...'))
    .catch(err => console.log(err));

const Comment = require("./model/comments.model")

app.get(`${basePath}api/comments`, (req, res) => {
    Comment.find().then(comments => res.json(comments));
})

app.post(`${basePath}api/comments`, (req, res) => {
    var comment = new Comment({
        name: req.body.name,
        email: req.body.email,
        text: req.body.text
    }); 
    comment.save().then(comment => res.json(comment)).catch((error) => console.log(error));

})

app.delete(`${basePath}api/comments/:id`, (req, res, next) => {
    Comment.findByIdAndRemove(req.params.id, req.body, (err, post) => {
        if(err) return next(err); 
        res.json(post);
    })
})

console.log('app done');

module.exports = app;
module.exports.handler = serverless(app);
