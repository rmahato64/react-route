import React from 'react';
import ViewPost from './ViewPost';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Delete from './Delete';
import Edit from './Edit';
import TagIcon from '../img/icons8-tag.png'

const Post = (props) => {
    const {id,title,category,description,contentEditable} = props.post
    const {deletePost,editPost,inputTitle} = props
    // const {id,title,category} = props.post

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
