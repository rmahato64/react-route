import React from 'react'
import {Link} from 'react-router-dom'

const DeletePost = ({id,deletePost}) => {
    return (
     <div>
         <h1>Are you sure you want to delete this post?</h1>
      <Link to = '/'>
      <button onClick = {() =>deletePost(id)}>OK</button>
      </Link>
      <Link to = {`/post/${id}`}>
      <button>Cancel</button>
      </Link>
      
     </div>
    )
}

export default DeletePost
