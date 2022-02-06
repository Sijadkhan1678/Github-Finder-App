import React, { Fragment } from 'react';

const Spinner = () => {
  return (
    <Fragment>
      
      <i style={iconSyle} className="fas fa-circle-notch"></i>
    </Fragment>
  );
};
const iconSyle = {
  display: 'block',
  textAlign: 'center',
  color: 'red',
  fontSize: '5.9rem',
};
export default Spinner;
