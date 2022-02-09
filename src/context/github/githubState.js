import React, {userReducer} from from 'react';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import axios from 'axios';
import {SEARCH_USERS,GET_USER,CLEAR_USER,SET_LOADING,GET_REPOS} from '../types'


const Githubstate= props =>{

  initialState={
    users:[],
    user: {},
    repos: [],
    loading: false
  }

  const [state,dispatch]=userReducer(initialState,dispatch)
  // search users
  // get user
  // get repos 
  // clear user
  // set loading
 return <GithubContext.provider value={{users: state.users,user: state.user,repos: state.repos,loading: state.loading}}>
   { props.childern}
    </GithubContext.provider>

}