import React, { Component } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import CommentDisplay from '../CommentDisplay/CommentDisplay';

const axios = require('axios').default;

class CommentContainer extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            allComments: []
        }
    }

    getComments = () => {
        axios.get('/.netlify/functions/app/api/comments').then((comments) => {
            if(comments && comments.data && comments.data.length) {
                this.setState({allComments: comments.data}); // mounts component again
            }
        })
    }

    componentDidMount() {
        this.getComments();
    }

    render() {
        // console.log(this.state.allComments)
        return (
            <React.Fragment>
                <CommentForm updateComments={this.getComments}/>
                {this.state.allComments.map((comment, index) => { 
                    return (
                        <>
                            <CommentDisplay key={index} comment={comment} updateComments={this.getComments}/>
                        </>
                    )
                })}
                {/* <CommentForm updateComments={this.getComments}/> */}
            </React.Fragment>
        )
    }
}

export default CommentContainer;