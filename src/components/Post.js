import React from 'react';
import { Link } from 'react-router-dom';



const Post = (props) => {
    const {id,title,category} = props.post

    return (        
        <div className = 'post-container' id='post-item'>
            <div><Link to = {`/post/${id}`}><h1>{title}</h1></Link></div>
            <div className='form-inner'>
                <div className='input-holder'>{category}</div>
            </div>
        </div>
    )
}

export default Post;
