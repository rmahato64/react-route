import React from 'react';
import {Link} from 'react-router-dom';

const DeletePost = ({id,deletePost}) => {
    return (
        <div className='confirm-container'>
            <h2 className='confirm-title'>Are you sure you want to delete this post?</h2>
            <div className='btn-container'>
                <Link to = '/' className='link'><button className='OkdeleteBtn' onClick = {() =>deletePost(id)}>Delete</button></Link>
                <Link to = {`/post/${id}`} className='link'><button className='cancel-deleteBtn'>Cancel</button></Link>
            </div>
        </div>
    )
}

export default DeletePost;
