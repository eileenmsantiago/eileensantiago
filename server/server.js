const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const cors = require("cors");

// Instances
const app = express(); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
app.use(cors());

// const router = express.Router();

// configure/connect to Mongo Database 
const db = 'mongodb+srv://paperspace:paperspace2020@cluster0-axzl6.mongodb.net/EileenSantiago?retryWrites=true&w=majority';
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Eileen Santiago Portfolio Connected to PaperSpaceDB...'))
    .catch(err => console.log(err));

const Comment = require("./model/comments.model")

app.get('*/api/comments', (req, res) => {
    Comment.find().then(comments => res.json(comments));
})

app.post('*/api/comments', (req, res) => {
    var comment = new Comment({
        name: req.body.name,
        email: req.body.email,
        text: req.body.text
    }); 
    comment.save().then(comment => res.json(comment)).catch((error) => console.log(error));

})

app.delete('*/api/comments/:id', (req, res, next) => {
    Comment.findByIdAndRemove(req.params.id, req.body, (err, post) => {
        if(err) return next(err); 
        res.json(post);
    })
})

// router.get('/', function(req, res) {
//     res.json({ message: 'API Initialized!'});
// });

//adding the /comments route to our /api router
// router.route('/comments')
//retrieve all comments from the database
// .get(function(req, res) {
//     //looks at our Comment Schema
//     Comment.find().then(comments => res.json(comments));
// })
//post new comment to the database
// .post(function(req, res) {
//     var comment = new Comment();
//     comment.name = req.body.name;
//     comment.email = req.body
//     comment.text = req.body.text;

//     comment.save(function(err) {
//     if (err)
//         res.send(err);
//     res.json({ message: 'Comment successfully added!' });
//     });
// });

//connecting the backend routing
// app.use("/comments", commentRouter);
// app.use("/api", router);


const port = process.env.Port || 5001; 
app.listen(port, () => console.log(`Server started on port ${port} `));
