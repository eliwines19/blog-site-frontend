import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import PostsPage from './PostsPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="app-div">
        <Route path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route path="/posts" render={routerProps => <PostsPage {...routerProps} />} />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
