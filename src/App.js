import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import axios from 'axios';
import './app.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  Searchuser= async text=>{
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLDEINT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLDEINT_SECRET}`);
    
    console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }
    seatAlert=(msg,type)=>{

      this.setState({alert:{msg,type}})
    setTimeOut(()=>this.setState({alert:null}),5000)

}

  
  render() {
    const {users,loading}=this.state
    return (
      <div>
        <Navbar title="Github FInder" />
        <div className="container">
          <Alert />

        <Search Searchuser={this.Searchuser}/>
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}
export default App;
