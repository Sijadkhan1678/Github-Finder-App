import React, { Component } from 'react';
import UserItem from './UserItem';
import propTypes from 'prop-types'

class Users extends Component {
  const Users=props
  static propTypes={
    users: propTypes.array.isRequired
  }
  
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

static propTypes={
  users: propTypes.array.isRequired
}


const userStyle = {
  display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'};

export default Users;
