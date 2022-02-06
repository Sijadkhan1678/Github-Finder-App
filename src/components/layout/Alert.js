import React from 'react';
import proptypes from 'prop-type';
//this function is Execute when X button is clicked and will change the state of alert which is occure in the app.js
//this.props.removeAlert()
 const Alert=({alert})=>{
//alert propery  comes as an object from App.js.
// following condition  to check alert object is null or not 
      alert!=null &&(
    <div className={`alert alert-${alert.type}`}>
                 {alert.msg}
            <i className="fas fa-info-circle"></i> { alert.msg }
                
           </div>

};

Alert.propTypes={
        alert: propTypes.object.isRequired,
}
export default Alert;