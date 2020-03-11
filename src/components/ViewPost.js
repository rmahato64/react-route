import React from 'react'
import Delete from './Delete'
import Edit from './Edit'

const ViewPost = ({id, posts, props}) => {
    console.log(props)
    const post = posts.filter(post => post.id === id);
    const {title, category, } = post[0]
    console.log(posts)
    console.log('id',id)
    console.log(posts[0].id)
    console.log(posts[1].id)
    console.log(posts[2].id)
    console.log(posts[3].id)
    console.log('post',post[0]);
    console.log(post)
    return (
        <div className='post-container'>
           <div>Id : {id}</div>
           <div>Title : {title}</div>
           {/* <div>Category : {post.category}</div>
           <div>Descri+ption : {post.description}</div>
           <div><input type = "text"  ref = {post.inputTitle}></input></div>
           <Delete id = {id} deletePost = {deletePost}/>
           <Edit id = {id} editPost = {editPost} title = {title} category = {category} description = {description}/> */}
          
        </div>
    )
}

export default ViewPost;
