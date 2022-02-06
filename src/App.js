import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './app.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLDEINT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLDEINT_SECRET}`);
    
    console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }
  render() {
    const {users,loading}=thi.state
    return (
      <div>
        <Navbar title="Github FInder" />
        <div className="container">
          <Users users={users} loading={state.loading} />
        </div>
      </div>
    );
  }
}
export default App;
