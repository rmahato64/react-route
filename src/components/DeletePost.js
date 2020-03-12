import React from 'react'
import {Link} from 'react-router-dom'

const DeletePost = ({id,deletePost}) => {
    return (
     <div className='confirm-container'>
        <h2>Are you sure you want to delete this post?</h2>
        <div className='btn-container'>
            <Link to = '/'><button onClick = {() =>deletePost(id)}>OK</button></Link>
            <Link to = {`/post/${id}`}><button>Cancel</button></Link>
        </div>
     </div>
    )
}

export default DeletePost
