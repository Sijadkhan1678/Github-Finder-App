import React, { useContext } from 'react';
import propTypes from 'prop-types';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert, clearAlert } = alertContext;
  return (
    alert.length !== 0 && (
      <div className={` dis-fl alert alert-${alert.type}`}>
        <div>
          <i className="fas fa-info-circle " />
          {alert.msg}
        </div>
        <div>
          {/* when user clicked on x button which call clearAlert Function anf then alert is clear from screen*/}
          <i onClick={clearAlert} className="fas fa-times cursor" />
        </div>
      </div>
    )
  );
};

Alert.propTypes = {
  alert: propTypes.object.isRequired,
  clearAlert: propTypes.func.isRequired,
};

export default Alert;
