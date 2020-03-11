import React from 'react';
import ViewPost from './ViewPost';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Delete from './Delete';
import Edit from './Edit';
<<<<<<< HEAD
import PostDetail from './PostDetail';
=======
import TagIcon from '../img/icons8-tag.png'
>>>>>>> Helmi

const Post = (props) => {
    const {id,title,category,description,contentEditable} = props.post
    const {deletePost,editPost,inputTitle} = props
    // const {id,title,category} = props.post
<<<<<<< HEAD
    return (
  
        
        <div className = 'post-container' id='post-item'>
            <div><Link to = {`/post/${id}`}><h1>{title}</h1></Link></div>
            <div className='form-inner'>
                <Delete id = {id} deletePost = {deletePost}/>
                <Edit id = {id} editPost = {editPost} title = {title} category = {category} description = {description}/>
                <div className='input-holder'>{category}</div>
                <div className='input-holder'>{id}</div>
            </div>
        </div>
    )
}

export default Post;
=======

    return (
            <div className = 'post-container' id='post-item'>    
                <div className='title-container'>
                    <Link to = {`/post/${id}`} className='link'>
                        <div className='title-child'>
                            <img src={TagIcon}></img>
                            <p className='input-holder title-text'>{category} ({id})</p>
                        </div>
                        <div>
                            <h2>{title}</h2>
                        </div>
                    </Link>
                </div>
                <div className='btn-container'>
                    <Delete id = {id} deletePost = {deletePost}/>
                    <Edit id = {id} editPost = {editPost} title = {title} category = {category} description = {description}/>
                </div>
            </div>
    )
}

export default Post;
>>>>>>> Helmi
