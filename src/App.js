import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/githubState';
import AlerState from './context/alert/alertState';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import Home from './components/pages/Home';

import './app.css';

const App = () => {
  return (
    <GithubState>
      <AlerState>
        <Router>
          <div className="App">
            <Navbar />
            <Search />
            <div className="container">
              <Alert />
              <Switch>
                {/* Route for the home page */}
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />

                <Route exact path="/user/:login" component={Uset} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlerState>
    </GithubState>
  );
};
export default App;
