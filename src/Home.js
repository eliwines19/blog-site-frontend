import React from 'react';
import './stylesheets/home.css';
import Navbar from './Navbar';

class Home extends React.Component {

  render(){
    return (
      <div>
        <Navbar />
        <h1 className="main-title">Blog Website Name</h1>
      </div>
    )
  }

}

export default Home;
