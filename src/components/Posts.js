import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';
const Posts = (props) => {
    const postsList = props.posts.map((post => 
        <Post key = {post.id} post = {post} deletePost = {props.deletePost} editPost = {props.editPost} inputTitle = {props.inputTitle}/>))
    
        return (
            <div>
                <Link to = '/newpost'><button>Add Post</button></Link>
                {postsList}
            </div>
        )
    
    

}

export default Posts
