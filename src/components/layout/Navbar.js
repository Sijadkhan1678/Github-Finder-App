import React, { Component } from 'react';
import propTypes from 'prop-types';


  const Navbar= props =>{
  
    return (
      <div className="navbar bg-primary">
        <h1>
          <i className={props.icon}/>
          
          {props.title}
        </h1>
      </div>
    );
  
}

 Navbar.defaultProps = {
  icon: 'fab fa-github',
  title: 'Github FInder',
};
 Navbar.propTypes = {
  icon: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default Navbar;
