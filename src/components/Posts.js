import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    const postsList = props.posts.map((post => 
        <Post key = {post.id} post = {post} deletePost = {props.deletePost} editPost = {props.editPost} inputTitle = {props.inputTitle}/>))
    
        return (
            <div >
<<<<<<< HEAD
                <Link to = '/newpost'><button >Add Post</button></Link>
=======
                <Link to = '/newpost'><button className='addPost-btn'>New Post</button></Link>
>>>>>>> Helmi
                <div className='all-post-container'>
                {postsList}
                </div>
            </div>
        )
    
    

}

<<<<<<< HEAD
export default Posts
=======
export default Posts
>>>>>>> Helmi
