import React, {Component} from 'react';
import propTypes from 'prop-types'
     

class Search extends Component{

   static propTypes={
     setAlert: propTypes.func.isRequired,
     Searchuser: propTypes.func.isRequired,
   }
       state={
               text: ''
}
      onChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
}
 onSubmit=e=>{
  e.preventDefault();

        if(this.state.text==''){

         this.props.setAlert('Please Enter a username','light')
      }
     else{
                this.props.Searchuser(this.state.text);
          this.setState({text: ''})
}
          
}
         
   
render(){
   return(
        <div>
         <form onSubmit={this.onSubmit} className='form' >
        <input type='text' name='text' value={this.state.text} placeholder='Search users' onChange={this.onChange} />
        <input type='submit' value='Search user' className='btn btn-danger btn-block'/>
        </form>
       {   this.props.showClear &&(
          <button className='btn btn-dark btn-block' onClick={this.props.clearUsers}>Clear</button>)}
       </div>

       )

}


}
export default Search;