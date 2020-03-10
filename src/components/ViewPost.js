import React from 'react'
import Delete from './Delete'
import Edit from './Edit'

const ViewPost = ({title, id, category,description,deletePost,editPost,contentEditable,inputTitle}) => {
    
    return (
        <div className='post-container'>
           <div>Id : id = {id}</div>
           <div>Title : {title}</div>
           <div>Category : {category}</div>
           <div>Descri+ption : {description}</div>
           <div><input type = "text"  ref = {inputTitle}></input></div>
           <Delete id = {id} deletePost = {deletePost}/>
           <Edit id = {id} editPost = {editPost} title = {title} category = {category} description = {description}/>
        </div>
    )
}

export default ViewPost;