import React from 'react'
import Post from './Post'
const Posts = (props) => {
    const postsList = props.posts.map((post => 
        <Post key = {post.id} post = {post} deletePost = {props.deletePost} editPost = {props.editPost} inputTitle = {props.inputTitle}/>))
    
        return (
            <div>
                {postsList}
            </div>
        )
    
    

}

export default Posts
