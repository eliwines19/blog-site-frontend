import React from 'react';
import './stylesheets/navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component{

    render(){
        return (
            <div className="navbar-div">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about" className="about-nav">About</NavLink>
            </div>
        )
    }
    
}

export default Navbar;