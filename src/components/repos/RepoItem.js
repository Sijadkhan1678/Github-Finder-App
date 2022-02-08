import React from 'react'
import propTyeps from 'prop-types'
 
const RepoItem=({repo})=>{
return(
<div className='card'>
  <h3>

    <a href={repo.html_url} target='_blank' rel='noreferrer'>
      {repo.name}</a>
  </h3>

</div>
)

}
RepoItem.propTyeps={
  rep: propTyeps.object.IsRequired,
}
export default RepoItem;