import React from 'react'
import Add from './Add'
import {BrowserRouter,Route,Link,NavLink,Switch,Prompt,Redirect} from 'react-router-dom'
import {randomId} from '../data/randomId'
const AddPost = (props) => {
    const {title,description,category,id,addPost,handleChange} = props
    return (
        <BrowserRouter>
        <NavLink to = '/posts/newpost'>Add Post</NavLink>
        <Route path = '/posts/newpost' component = {() => <Add title = {title} description = {description} category = {category} id = {id} addPost = {addPost} handleChange = {handleChange}/>}/>
        </BrowserRouter>
    )
}

export default AddPost
