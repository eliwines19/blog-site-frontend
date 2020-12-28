import React from 'react';
import Post from './Post';
import Home from './Home';
import About from './About';
import PostsPage from './PostsPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component{

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
            <div>
                <Router>
                    <Route path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route path="/posts" render={routerProps => <PostsPage {...routerProps} posts={posts} />} />
                </Router>
            </div>
        )
    }

    render(){
        return(
            <div className="all-posts-div">
                {this.checkForPosts()}
            </div>
        )
    }
}

export default App