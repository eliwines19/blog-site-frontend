import React from 'react';

class PostsContainer extends React.Component{

    constructor(){
        super();
        this.state = {}
    }

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

    render(){
        return(
            <div>
                {console.log(this.state)}
                PostsContainer
            </div>
        )
    }

}

export default PostsContainer;