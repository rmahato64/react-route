import React from 'react';
import ViewPost from './ViewPost';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Delete from './Delete';
import Edit from './Edit';
import PostDetail from './PostDetail';

const Post = (props) => {
    const {id,title,category,description,contentEditable} = props.post
    const {deletePost,editPost,inputTitle} = props
    // const {id,title,category} = props.post
    return (
        // <BrowserRouter>
        // <div className = 'home-page-display'>
        // <NavLink to = {`/post/${id}`}>{title}</NavLink>
        // <div>{category}</div>
        // </div>
        // <Route path = {`/post/${props.post.id}`} component = {()=>{
        //       return <ViewPost title = {title} category = {category} description = {description} id = {id} deletePost = {deletePost} editPost = {editPost} contentEditable = {contentEditable} inputTitle = {inputTitle}/>
        //       }}/>
        
        // </BrowserRouter>
        
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
