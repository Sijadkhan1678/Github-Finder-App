import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const alertContext = useContext(AlertContext);
  const githubContext = useContext(GithubContext);
  const { searchUsers, users, clearUsers } = githubContext;
  const { setAlert } = alertContext;
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please Enter a username', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Search users"
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search user"
          className="btn btn-danger btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-dark btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
