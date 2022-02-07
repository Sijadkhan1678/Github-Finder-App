import React from 'react';
import propTypes from 'prop-types';

//this function is Execute when X button is clicked and will change the state of alert which is occure in the app.js

 const Alert=({alert})=>{
        const removeAlert= props.removeAlert()
        console.log(props.removeAlert)
//alert propery  comes as an object from App.js.
// following condition  to check alert object is null or not 
   return(   alert!=null &&(
           <div className={` dis-fl alert alert-${alert.type}`}>
              <div>
                 <i className="fas fa-info-circle "/>
                 {alert.msg}
                  </div>
           <div>

             <i onClick={removeAlert()} className='fas fa-times cursor'/>               
           </div>
           </div>  ))

};

Alert.propTypes={
        alert: propTypes.object.isRequired,
}

export default Alert;