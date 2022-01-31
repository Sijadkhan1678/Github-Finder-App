import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/UserItem';
import './style.css';

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
