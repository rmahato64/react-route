import React from 'react'
import {Link} from 'react-router-dom'

const EditPost = ({id,editPost,handleChange,post}) => {
    const {title,category,description} = post
    
    return (
    <div className='form-container'>
        <div>
            <h1>Edit Post</h1>
        </div>
        <div className='form-inner'>
            <div className='input-holder'>
                <span className="label">Title :</span> 
                <input className = "input-text" type = "text" name = 'title' value = {title} onChange = {handleChange}></input>
            </div>
            <div className='input-holder'>
                <span className="label">Category:</span>
                <input className = "input-text" type = "text" name = 'category' value = {category} onChange = {handleChange}></input>
            </div>
            <div className='input-holder'>
                <span className="label">Description:</span>
                <textarea className = "input-text" type = "text" name = 'description' value = {description} onChange = {handleChange}></textarea>
            </div> 
            <div>
                <Link to='/'><button className='saveBtn' onClick = {() => editPost(id)}>Save</button></Link>
                <Link to = {`/post/${id}`}><button className = 'cancelBtn'>Cancel</button></Link>
            </div>     
        </div>
     </div>
    )
}

export default EditPost
