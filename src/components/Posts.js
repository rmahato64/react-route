import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'

const Posts = ({posts,deletePost,editPost}) => {
    const postsList = posts.map((post => 
        <Post key = {post.id} post = {post} deletePost = {deletePost} editPost = {editPost}/>))
    
        return (
            <div>
                <div className="header">
                    <div class className="logo">
                        <img style ={{width:150}} src= {logo} />
                    </div>
                <div className="header-right">
                    <div className=" header-title">
                    <p>Number of Posts : {posts.length}</p>
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

export default Posts;
