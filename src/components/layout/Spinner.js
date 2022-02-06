import React, { Fragment } from 'react';

const Spinner = () => {
  return (
    <Fragment>
      <i style={iconSyle} className="fa fa-spinner" aria-hidden="true"></i>
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
