import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';

const Posts = ({posts,deletePost,editPost}) => {
    const postsList = posts.map((post => 
        <Post key = {post.id} post = {post} deletePost = {deletePost} editPost = {editPost}/>))
    
        return (
            <div>
                <div className="header">
                 <div className="header-wrapper">
                 <div>
                 <h2>Number of Posts : {posts.length}</h2>
                 </div>
                 <div>
                    <Link to = '/newpost'><button className='addPost-btn'>New Post</button></Link>
                    </div>
                </div>
                </div>
               
                   
                   
                    <div className='all-post-container'>
                    {postsList}
                    </div>
                  
            </div>
        )
    
    

}

export default Posts
