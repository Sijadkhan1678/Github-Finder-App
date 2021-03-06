import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';


  const Navbar= props =>{
    
  
    return (
      <div className="navbar bg-primary">
        <h1>
          <i className={props.icon}/>
          
          {props.title}
        </h1>
        <ul>
          <li><Link to='/'>Home</Link> </li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </div>
    );
  
}

 Navbar.defaultProps = {
  icon: 'fab fa-github',
  title: 'GithubFinder',
};
 Navbar.propTypes = {
  icon: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default Navbar;
