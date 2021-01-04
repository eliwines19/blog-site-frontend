import React from 'react';
import './stylesheets/post-show.css';

class PostShow extends React.Component{

    scrollToPost = () => {
        window.scrollTo(0, document.body.scrollHeight + 100)
    }

    renderPost = () => {
        const { match, posts } = this.props;
        let currentPost = posts[match.params.postId - 1];
        return (
            <div className="post-show-all-content">
                {this.renderPostDate(currentPost.attributes.created_at)}
                <h1 id="post-show-title">{currentPost.attributes.title}</h1>
                <p id="post-show-content">{currentPost.attributes.content}</p>
            </div>
        )
    }

    renderPostDate = (date) => {
        const year = date.slice(0,4)
        const month = date.slice(5, 7)
        const day = date.slice(8, 10)
        return (
            <p id="post-show-date">
                {`${day}/${month}/${year}`}
            </p>
        )
    }

    render(){
        return(
            <div>
                {this.renderPost()}
                {this.scrollToPost()}
            </div>
        )
    }
}

export default PostShow;