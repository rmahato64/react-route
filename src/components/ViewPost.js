import React from 'react'
import Delete from './Delete'
import Edit from './Edit'

const ViewPost = ({id, posts, deletePost, editPost}) => {

    const post = posts.filter(post => post.id === id);
    const {title, category, description, isDeleted } = post[0]
    
    return (
        <div className='post-container'>
           <div>Id : {id}</div>
           <div>Title : {title}</div>
           <div>Category : {category}</div>
           <div>Description : {description}</div>
           <Delete id = {id} deletePost = {deletePost} isDeleted = {isDeleted}/>
           <Edit id = {id} editPost = {editPost} title = {title} category = {category} description = {description}/>
          
        </div>
    )
}

export default ViewPost;
