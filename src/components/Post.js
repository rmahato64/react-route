import React from 'react'
import {BrowserRouter,Route,Link,NavLink,Switch,Prompt,Redirect} from 'react-router-dom'
import ViewPost from './ViewPost'
const Post = (props) => {
    const {id,title,category,description,contentEditable} = props.post
    const {deletePost,editPost,inputTitle} = props
    return (
        <BrowserRouter>
        <div className = 'home-page-display'>
        <NavLink to = {`/post/${id}`}>{title}</NavLink>
        <div>{category}</div>
        </div>
        <Route path = {`/post/${props.post.id}`} component = {()=>{
              return <ViewPost title = {title} category = {category} description = {description} id = {id} deletePost = {deletePost} editPost = {editPost} contentEditable = {contentEditable} inputTitle = {inputTitle}/>
              }}/>
        
        </BrowserRouter>
    )
}

export default Post
