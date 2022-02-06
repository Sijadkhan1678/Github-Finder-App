import React, {Component} from 'react';
     

class Search extends Component{
       state={
               text: ''
}
      onChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
}
 onSubmit=e=>{
          e.preventDefault();
        this.props.Searchuser(this.state.text);
          this.setState({text: ''})
          
}
         
   
render(){
   return(
        <div>
         <form onSubmit={this.onSubmit} className='form' >
        <input type='text' name='text' value={this.state.text} placeholder='Search users' onChange={this.onChange} />
        <input type='submit' value='Search user' className='btn btn-dark'/>
        </form>
       </div>
)


}


}
export default Search;