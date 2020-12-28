import React from 'react';
import { Route } from 'react-router-dom';
import PostsList from './PostsList';
import PostShow from './PostShow';

class PostsPage extends React.Component{

    render(){
        const { posts, match } = this.props;
        return (
            <div>
                {/* <PostsContainer /> */}
                <PostsList posts={posts} />
                <Route
                    path={`${match.url}/:postId`}
                    render={routerProps => <PostShow {...routerProps} posts={posts}/>}
                />
            </div>
        )
    }

}

export default PostsPage;