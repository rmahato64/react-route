import React from 'react';
import ViewPost from './ViewPost';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Post = (props) => {
    // const {id,title,category,description,contentEditable} = props.post
    // const {deletePost,editPost,inputTitle} = props
    const {id,title,category} = props.post
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
        <div className = 'home-page-display'>
            <Link to = {`/post/${id}`}>{title}</Link>
            <div>{category} id = {id}</div>
        </div>
    )
}

export default Post
