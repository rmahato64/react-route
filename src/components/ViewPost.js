import React from 'react'
import {Link} from 'react-router-dom'

const ViewPost = ({id,posts,deletePost,editInput,}) => {
    
    const post = posts.filter(post => post.id===id)
    
    const {title,category,description} = post[0]
    return (
        <div className='post-container'>
            <Link to = '/'>Back to posts</Link>
           <div>Id : id = {id}</div>
           <div>Title : {title}</div>
           <div>Category : {category}</div>
           <div>Description : {description}</div>
           <Link to = '/'><button  className="deleteBtn" onClick = {()=>deletePost(id)}>Delete</button></Link>
           <Link to = {`/post/edit/${id}`}><button onClick = {() =>editInput(id)} className = "editBtn">Edit</button></Link>
           
        </div>
    )
}

export default ViewPost;
