const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    name: {
        type: String, 
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    comment: { 
        type: String
    },
}, {
    timestamps: true,
});

// API end-point routes
const Comments = mongoose.model("comments", CommentsSchema);
module.exports = Comments;
