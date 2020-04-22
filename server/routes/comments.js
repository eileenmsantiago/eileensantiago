//import router dependency
const router = require("express").Router();
//import our model(which is our mongodb collection and schema)
let Comments = require("../models/comments.model");
const moment = require('moment');

//Get data from the database i.e get entries stored in the database
router.route("/").get((req, res) => {

const {from, to} = req.query;

Comments
    .then(comments => {
        return res.json(comments)
    })
    .catch(err => res.status(400).json("Error:" + err))
});

// Add/insert into the database i.e add a new entry to the database
router.route("/add").post((req, res) => {


    const newComments = new Comments({
        ...req.body,
    });

    return newComments.save()
        .then(savedComment => {

            res.status(200).json(savedComment)
        })
        .catch(err => res.status(404).json(`Error: ${err}`));
});

//find a specific entry from the database
router.route('/:id').get((req, res) => {
Comments.findById(req.params.id)
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json('Error: ' + err));
});

//edit a specific entry from the database and update it
router.route('/update/:id').put((req, res) => {

    return Comments.findById(req.params.id)
    .then(comments => {
        comments.content = req.body.content;
        comments.prompt = req.body.prompt;
        comments.tones = tones;
        
        //update part
        comments.save()
        .then(updatedComment => res.json(updatedComment))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//Deleting a specific entry from the database
router.route('/delete/:id').delete((req, res) => {
    Comments.findByIdAndDelete(req.params.id)
    .then(() => res.json('Comment deleted.'))
    .catch(err => res.status(404).json('Error: ' + err));
});

module.exports = router;

