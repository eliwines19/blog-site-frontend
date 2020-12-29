import React from 'react';

class PostShow extends React.Component{

    render(){
        const { match, posts } = this.props;
        return(
            <div>
                <h3 id="post-show-title">{posts[match.params.postId - 1].attributes.title}</h3>
            </div>
        )
    }
}

export default PostShow;