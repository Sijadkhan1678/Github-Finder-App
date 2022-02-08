import React, {Fragment,useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import axios from 'axios';
import './app.css';


const App =()=>{
 
  const [users,setUsers]=useState([])
  const [user,setUser]=useState({})
  const [repos,setRepos]=useState([])
  const [loading,setLoading]=useState(false)
  const [alert,showAlert]=useState(null)

  const Searchuser = async (text) => {
    
    setLoading(true)
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLEINT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLEINT_SECRET}`
    );

    setLoading(false)
    setUsers(res.data.items)
  };
  const getUser = async (username) => {
    
    setLoading(true)
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLEINT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLEINT_SECRET}`
    );
  
    setLoading(false)
    setUser(res.data)
  };
  const getUserRepos = async (username) => {
    
    setLoading(true)
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLEINT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLEINT_SECRET}`
    );
    
    setLoading(false)
    setRepos(res.data)
    
  };

 const  setAlert = (msg, type) => {
    
    showAlert({msg,type})
    setTimeout(() => showAlert(null), 5000)
  };
const  clearUsers = () => setUsers([]);

 const removeAlert = () =>  showAlert(null)

  
   
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert removeAlert={removeAlert} alert={alert} />
            <Switch>
              {/* Route for the home page */}
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      Searchuser={Searchuser}
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />

              <Route
                exact path="/user/:login" render={(props) => (
                  <User
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    repos={repos}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  
}
export default App;
