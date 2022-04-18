import React, { useReducer } from 'react';
import { SET_ALERT, REM0VE_ALERT } from '../types';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    setTimeout(() => dispatch({ type: REM0VE_ALERT }), 5000);
  };

  const clearAlert = () => dispatch({ type: REM0VE_ALERT });

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
        clearAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
