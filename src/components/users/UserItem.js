import React, { Component } from 'react';

import propTypes from 'prop-types'
class UserItem extends Component {
  
    static propTpes={
      user: propTypes.object.isRequired,
    }
    
  render() {
    const {login,avatar_url,html_url}=this.props.user;
    return (
      <div className='text-center card'>
        <img src={avatar_url} alt="" className='round-img' style={{width:100}}/>
        <h3 className='my-1'>{login}</h3>
        <a className='btn bg-primary' href={html_url}>Profile</a>
      </div>
    );
  }
};
export default UserItem;
