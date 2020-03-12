import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';

const Posts = ({posts,deletePost,editPost}) => {
    const postsList = posts.map((post => 
        <Post key = {post.id} post = {post} deletePost = {deletePost} editPost = {editPost}/>))
    
        return (
            <div >
                <Link to = '/newpost'><button className='addPost-btn'>New Post</button></Link>
                <h1>Number of Posts : {posts.length}</h1>
                <div className='all-post-container'>
                {postsList}
                </div>
            </div>
        )
    
    

}

export default Posts
