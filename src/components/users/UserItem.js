import React, { Component } from 'react';
import propTypes from 'prop-types';

const UserItem = ({user:{login,avatar_url,html_url}}) => {

  return (
    <div className="text-center card">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: 100 }}
      />
      <h3 className="my-1">{login}</h3>
      <a className="btn bg-primary" href={html_url}>
        Profile
      </a>
    </div>
  );
};

UserItem.prototypes = {
  user: propTypes.object.isRequired,
};
export default UserItem;
