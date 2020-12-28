// import React from 'react';
// import './stylesheets/post.css';
// import { Route, Link } from 'react-router-dom';
// import PostShow from './PostShow';

// class Post extends React.Component{

//     renderPost = () => {
//         const post = this.props.post
//         return(
//             <Link className="post-box" to={`/posts/${post.id}`}>
//                 <h2 className="post-content" id="post-title">{post.attributes.title}</h2>
//                 {this.renderPostContent(post.attributes.content)}
//                 {this.renderPostDate(post.attributes.created_at)}
//                 <h4 className="post-content">Click to keep reading</h4>
//             </Link>
//         )
//     }

//     renderPostContent = (content) => {
//         const newContentStr = content.slice(0, 100)
//         return(
//             <p className="post-content" id="post-content">
//                 {newContentStr.trim()}...
//             </p>
//         )
//     }

//     renderPostDate = (date) => {
//         const year = date.slice(0,4)
//         const month = date.slice(5, 7)
//         const day = date.slice(8, 10)
//         return (
//             <p className="post-content" id="post-date">
//                 Posted: {`${day}/${month}/${year}`}
//             </p>
//         )
//     }

//     render(){
//         return(
//             <>
//                 <Route exact path={`/posts/:postId`} component={PostShow} />
//                 {this.renderPost()}
//             </>
//         )
//     }
// }

// export default Post;