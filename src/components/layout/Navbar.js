import React, { Component } from 'react';
/*import propTypes from 'prop-Types';*/

class Navbar extends Component {
  /* static defaultProps = {
    icon: 'fab git-hub',
    title: 'Github FInder',
  };*/
  state = {
    title: 'Github FInder',
    icon: 'fa fab-Github',
  };
  /*  static propTypes = {
    icon: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
  };*/
  render() {
    return (
      <div className="navbar">
        <h1>
          <i className="fab git-hub"></i>

          {this.props.title}
        </h1>
      </div>
    );
  }
}
export default Navbar;
