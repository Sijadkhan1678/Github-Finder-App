import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './app.css';

class App extends Component {

    
  render() {
    return (
      <div>
      
        <Navbar title="Github FInder" />
        <UserItem />
      </div>
    )
  }
}
export default App;
