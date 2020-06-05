import React, {useState} from 'react';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
const axios = require('axios').default;

const CommentDisplay = (props) => {

    const deleteComment = () => {
        axios.delete(`/.netlify/functions/app/api/comments/${props.comment._id}`).then(res => {
            console.log(res);
            props.updateComments();
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="comment">
            <div className="comment__label">
                <Paragraph className="comment__label-para" size="md" weight="bold">{props.comment.name}</Paragraph>
                <Paragraph size="md" weight="reg">({props.comment.email})</Paragraph>
            </div>
            <div className="comment__label">
                <Paragraph>{props.comment.text}</Paragraph>
            </div>
            {/* <button>Edit</button> */}
            {/* <div className="delete" onClick={deleteComment}>Delete</div> */}
        </div>
    )
}

export default CommentDisplay;