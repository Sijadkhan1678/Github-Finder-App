import React, { Component } from 'react';
import propTypes from 'prop-types';

class Navbar extends Component {
  static defaultProps = {
    icon: 'fab git-hub',
    title: 'Github FInder',
  };
  state = {
    title: 'GithubFinder',
    icon: 'fa fab-Github',
  };
   static propTypes = {
    icon: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
  };
  render() {
    return (
      <div className="navbar bg-primary">
        <h1>
          <i className="fab fa-github"></i>
          
          {this.state.title}
        </h1>
      </div>
    );
  }
}
export default Navbar;
