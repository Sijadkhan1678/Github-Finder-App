import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({user:{login,avatar_url,}}) => {

  return (
    <div className="text-center card">
      <img
        src={avatar_url}
        alt="Profile"
        className="round-img"
        style={{ width: 100 }}
      />
      <h3 className="my-1">{login}</h3>
      
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">Profile</Link>
    </div>
  );
};

UserItem.prototypes = {
  user: propTypes.object.isRequired,
};
export default UserItem;
