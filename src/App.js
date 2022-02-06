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
    msg: null,
  };
  Searchuser= async text =>{
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLDEINT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLDEINT_SECRET}`);
    
    
    this.setState({ users: res.data.items, loading: false });
  }
    seatAlert=(msg,type)=>{

      this.setState({alert:{msg,type}})
    setTimeOut(()=>this.setState({alert:null}),5000)

}
clearUsers=()=>{
  this.setState({users:[]})
  }
  romoveAlert=()=>{
    this.setState({alert:null})
    }
    
  

  
  render() {
    const {users,loading,msg}=this.state
    return (
      <div>
        <Navbar title="Github FInder" />
        <div className="container">
          <Alert alert={this.state.alert} romoveAlert={this.removeAlert} />

        <Search Searchuser={this.Searchuser}
        seatAlert={this.seatAlert}
        />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}
export default App;
