import React from 'react'
import Add from './Add'

const AddPost = (props) => {
    const {post,addPost,handleChange} = props
    
    return (
        <div>
            <Add post = {post}  addPost = {addPost} handleChange = {handleChange}/>
        </div>
       
    )
}

export default AddPost
  