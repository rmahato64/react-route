import React from 'react'
import Delete from './Delete'
import Edit from './Edit'

const ViewPost = ({title, id, category,description,deletePost,editPost,contentEditable,inputTitle}) => {
<<<<<<< HEAD
    
    return (
        <div className='post-container'>
           <div>Id : id = {id}</div>
=======


// const ViewPost = (props) => {
    // const {id,title,category,description,contentEditable} = props.posts
    // const {deletePost,editPost,inputTitle} = props
    return (
        <div className='post-container'>
           <div>Id : {id}</div>
>>>>>>> Helmi
           <div>Title : {title}</div>
           <div>Category : {category}</div>
           <div>Descri+ption : {description}</div>
           <div><input type = "text"  ref = {inputTitle}></input></div>
           <Delete id = {id} deletePost = {deletePost}/>
           <Edit id = {id} editPost = {editPost} title = {title} category = {category} description = {description}/>
        </div>
    )
}

<<<<<<< HEAD
export default ViewPost;
=======
export default ViewPost;
>>>>>>> Helmi
