import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';

class PostsList extends React.Component{

    renderPosts = () => {
        return(
            <div>
                {this.props.posts.map(post => {
                    return(
                        <Link key={post.id} to={`/posts/${post.id}`}>
                            {post.attributes.title}
                        </Link>
                    )
                })}
            </div>
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