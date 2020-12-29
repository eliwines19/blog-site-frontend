import React from 'react';
import './stylesheets/post.css';
import { Link } from 'react-router-dom';

class PostsList extends React.Component{

    // scrolls to the bottom of the last link (aka where the post show starts)
    handleClick = (e) => {
        let allLinks = document.querySelectorAll('.post-box');
        let lastLink = allLinks[allLinks.length - 1];
        let linkCoordinate = lastLink.getBoundingClientRect();
        window.scrollBy(0, linkCoordinate.bottom);
    }

    renderPosts = () => {
        return(
            <div className="all-posts-div">
                {this.props.posts.map(post => {
                    return(
                        <Link onClick={() => this.handleClick()} key={post.id} className="post-box" to={`/posts/${post.id}`}>
                            <h2 className="post-content" id="post-title">{post.attributes.title}</h2>
                            {this.renderPostContent(post.attributes.content)}
                            {this.renderPostDate(post.attributes.created_at)}
                            <h4 className="post-content">Click to keep reading</h4>
                        </Link>
                    )
                })}
            </div>
        )
    }

    // only shows the first 100 characters of the post
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
            <div>
                {this.renderPosts()}
            </div>
        )
    }
}

export default PostsList