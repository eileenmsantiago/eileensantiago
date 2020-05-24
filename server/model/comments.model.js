const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    name: {
        type: String, 
        required: true 
    },
    email: {
        type: String,
        required: false
    },
    text: { 
        type: String
    },
}, {
    timestamps: true,
});

// API end-point routes
const Comment = mongoose.model('Comment', CommentsSchema);
module.exports = Comment;
