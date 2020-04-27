import React, { Component } from 'react';
import Heading from '../Heading/Heading';

const axios = require('axios').default;

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', comment: '' };
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            name: this.state.name, 
            email: this.state.email, 
            text: this.state.comment
        }
        axios.post('/.netlify/server/lambda/api/comments', newComment, {}).then(res => {
            this.props.updateComments();
            console.log(res); 
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        console.log(this.state);
        return (
            <>
                <Heading className="comment-section__heading" level="h4" style="h3">
                    I would love to hear from you! 💞
                </Heading>
                <form 
                    onSubmit={this.handleSubmit}
                    className="contact-form"
                >
                    <label>
                        <input 
                            type='text'
                            name='name'
                            className="inp"
                            placeholder='Your name'
                            value={ this.state.name }
                            onChange={ this.handleChange } />
                        <span class="label">Your name</span>
                        <span class="focus-bg"></span>
                    </label>
                    <label>
                        <input 
                            type='text'
                            name='email'
                            className="inp"
                            placeholder='Your email'
                            value={ this.state.email }
                            onChange={ this.handleChange } />
                        <span class="label">Your email</span>
                        <span class="focus-bg"></span>
                    </label>
                    <label>
                        <input 
                            type='text'
                            name='comment'
                            className="inp"
                            placeholder='Your comment'
                            value={ this.state.text }
                            onChange={ this.handleChange } />
                        <span class="label">Your comment</span>
                        <span class="focus-bg"></span>
                    </label>
                    <label>
                        <input 
                            className="inp"
                            type="submit" 
                            value="Submit" 
                        />
                    </label>
                </form>
            </>
        )
    }
}

export default CommentForm;