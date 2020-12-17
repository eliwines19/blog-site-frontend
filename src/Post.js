import React from 'react';
import './stylesheets/post.css';

class Post extends React.Component{

    renderPost = () => {
        const post = this.props.post
        return(
                <a className="post-box" href="about">
                    <h2 className="post-content" id="post-title">{post.attributes.title}</h2>
                    {this.renderPostContent(post.attributes.content)}
                    {this.renderPostDate(post.attributes.created_at)}
                    <h4 className="post-content">Click to keep reading</h4>
                </a>
        )
    }

    renderPostContent = (content) => {
        const newContentStr = content.slice(0, 100)
        return(
            <p className="post-content" id="post-content">
                {newContentStr.trim()}...
            </p>
        )
    }

    renderPostDate = (date) => {
        const year = date.slice(0,4)
        const month = date.slice(5, 7)
        const day = date.slice(8, 10)
        return (
            <p className="post-content" id="post-date">
                Posted: {`${day}/${month}/${year}`}
            </p>
        )
    }

    render(){
        return(
            this.renderPost()
        )
    }
}

export default Post;