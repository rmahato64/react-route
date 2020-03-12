import React from 'react'
import { Link } from 'react-router-dom';

const AddPost = ({post,addPost,handleChange,setInitial}) => {
    const {title,category,description} = post
    return (
        <div className = 'form-container'>
            <div>
                <h1>New Post</h1>
            </div>
            <div className="form-inner">
                 <div className="input-holder">
                    <p className="label"> Title:</p>
                    <input  className = "input-text" type = "text" name = 'title' value = {title} onChange = {handleChange}></input> 
                </div> 
                <div className="input-holder">
                    <p className="label"> Category:</p>
                    <input  className = "input-text" type = "text" name = 'category' value = {category} onChange = {handleChange}></input> 
                </div> 
                <div className = "input-holder">
                    <p className="label"> Write new post:</p> 
                    <textarea className="input-text" type = "text" name = 'description' value = {description} onChange = {handleChange}></textarea>
                </div>
                <div>
                    <Link to='/'><button className="postBtn" onClick = {addPost}>Add</button></Link>
                    <Link to='/'><button className ="cancelBtn" onClick = {setInitial}>Cancel</button></Link>
                </div>
            </div>        
        </div>
    )
}

export default AddPost


