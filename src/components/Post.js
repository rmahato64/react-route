import React from 'react';
import { Link } from 'react-router-dom';
import Delete from './Delete';


const Post = (props) => {
    const {id,title,category} = props.post
    const {deletePost} = props
    return (        
        <div className = 'post-container' id='post-item'>
            <div><Link to = {`/post/${id}`}><h1>{title}</h1></Link></div>
            <div className='form-inner'>
                <Delete id = {id} deletePost = {deletePost}/>
                <div className='input-holder'>{category}</div>
                <div className='input-holder'>{id}</div>
            </div>
        </div>
    )
}

export default Post;
