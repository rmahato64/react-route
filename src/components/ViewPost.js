import React from 'react';
import {Link} from 'react-router-dom';
import TagIcon from '../img/icons8-tag.png';


const ViewPost = ({id,posts,deletePost,editInput,}) => {
    
    const post = posts.filter(post => post.id===id)
    const {title,category,description} = post[0]
    return (
        <div>
            <Link to = '/' ><button className='backPost-btn'>Back to posts</button></Link>
            <div className='post-container' id='singlepost-container'>
                    <div className='title-child'>
                        <img src = {TagIcon} alt = "tag"></img>
                        <p className='input-holder title-text'>{category}</p>
                    </div>
                <div>
                    <h2>Title : {title}</h2>
                </div>
                <div className="input-holder">
                    <p className="title">Description : </p>
                    <p className = "text">{description}</p>
                </div>
                <div className='btn-container'>
                   <Link to = {`/post/delete/${id}`}>
                     <button className = "deleteBtn">Delete</button>
                    </Link>
                    <Link to = {`/post/edit/${id}`}><button onClick = {() =>editInput(id)} className = "editBtn">Edit</button></Link>
                </div>          
            </div>
        </div>
    )
}

export default ViewPost;
