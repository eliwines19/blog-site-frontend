import React from 'react';
import Post from '../Post';

class PostsContainer extends React.Component{

    state = {}

    fetchPosts = () => {
        fetch('http://localhost:3001/posts')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                posts: json.data
            })
        })
    }

    componentDidMount(){
        this.fetchPosts();
    }

    checkForPosts = () => {
        const { posts } = this.state;
        if(posts !== undefined){
            console.log('posts!')
            return(
                this.renderPosts(posts)
            )
        }else{
            console.log('no posts')
        }
    }

    renderPosts = (posts) => {
        return(
            <div className="all-posts-div">
                {posts.map(post => {
                    return (
                        <Post post={post}/>
                    )
                })}
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.checkForPosts()}
            </div>
        )
    }

}

export default PostsContainer;