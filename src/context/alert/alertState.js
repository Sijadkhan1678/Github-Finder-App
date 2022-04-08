import React,{useReducer} from 'react';
import {SET_ALERT,REM0VE_ALERT} from '../types';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

const AlertState = () => {
  
  const initialState = []
  
  const [statedispatch]= useReducer(AlertReducer,initialState);
  const setAlert = (msg,timeOut=5000)=>
  {
  dispatch({
    type: SET_ALERT,
    payload: msg
    
  })
 setTimeout(()=> dispatch({type:REM0VE_ALERT}),timeOut)
}
return <AlertContext.Provider 
       value = {{
         alert :state,
         setAlert
       }}
>


</AlertContext.Provider>

}

export default AlertState;
