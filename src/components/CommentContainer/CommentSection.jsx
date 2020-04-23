// import React, { Component, useState, useEffect } from 'react';
// import Container from '../Container/Container';
// import Heading from '../Heading/Heading';

// const CommentContainer = (props) => {

//     const { entry, submitComment, deleteComment, onSubmit, onDelete, value, onChange } = props;
//     const [ comment, setComment ] = useState(props.comment);

//     useEffect(
//         () => {
//             setComment(entry);
//         },
//         [entry]
//     );

//     const onTextChange = (e) => {
//         setComment({
//             ...comment, 
//             text: e.target.value
//         })
//     };

//     const submit = () => {
//         fetch('/api/comments',
//         {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 name: comment.name,
//                 email: comment.email,
//                 text: comment.text,
//                 // _userId: user.getId()
//             })
//         })
//         .then(res => res.json())
//         .then(res => res)
//         .catch(err => {
//             console.error(err);
//             return err;
//         });
//     }
//     const submitDelete = () => {
//         onDelete(comment);
//     }
//     console.log(comment)

//     return (
//         <Container>
//             {/* <h1>hello</h1> */}
//             <div className="comment-section">
//                 <Heading className="comment-section__heading" level="h4" style="h3">I would love to hear from you! 💞</Heading>
//                 <form className="comment-section__form" onSubmit={submit}>
//                     <div className="form-container">
//                         <label className="form-container__label">
//                             Your name 
//                         </label>
//                         <input type="text" placeholder="Eileen" name="name" required/>{comment.name}
//                     </div>
//                     <div className="form-container">
//                         <label className="form-container__label">
//                             Your email 
//                         </label>
//                         <input type="text" placeholder="eileen@gmail.com" name="email" required/>{comment.email}
//                     </div>
//                     <div className="form-container">
//                         <label className="form-container__label">
//                             Your comment 
//                         </label>
//                         <textarea type="text" placeholder="Your comment" name="comment" value={value} onChange={onChange} required>{comment.text}</textarea>
//                     </div>
//                     <div className="form-container">
//                         <input type="submit" value="Submit" onClick={submit}>Submit</input>
//                     </div>
//                     <div className="form-container">
//                         <input type="submit" value="Submit" onClick={submitDelete}>Delete</input>
//                     </div>
//                 </form>
//             </div>
//         </Container>
//     )
// }

// CommentContainer.defaultProps = {
//     comment: {
//         name: "",
//         date: null
//     },
//     submitText: 'Add Comment',
// }

// export default CommentContainer;