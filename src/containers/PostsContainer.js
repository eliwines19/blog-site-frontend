import React from 'react';
import { fetchPosts } from '../actions/PostActions';

class PostsContainer extends React.Component{

    componentDidMount(){
        fetchPosts();
    }

    render(){
        return(
            <div>
                PostsContainer
            </div>
        )
    }

}

export default PostsContainer;