import React,{component} from 'react';
import propTypes from 'prop-Types';


class navbar extends component {
static defaultProps = {
icon: 'fab git-hub',
title: 'Github FInder'
}
static propTypes = {
icon: propTypes.string.isRequired,
title: propTypes.string.isRequired
}
render () {
return(
<div className='navbar'>
<h1>
<i className="fab git-hub"></i>
{this.props.title}


</h1>
   
</div>
)
}

}