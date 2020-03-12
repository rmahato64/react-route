import React from 'react';
import { Link } from 'react-router-dom';
import TagIcon from '../img/icons8-tag.png'
import pic1 from '../img/pic1.jpg'



const Post = (props) => {
    const {id,title,category,date} = props.post

    return (   

        <div className = 'post-container' id='post-item'>
       
            <div className = "title-container">
            
                <Link to = {`/post/${id}`} className = "link">
                <div className='title-child'>
                <img src = {TagIcon} alt = "tag"></img>
                <p className='input-holder title-text'>{category}</p>
                </div>
                    <div>
                    <h2>{title}</h2>
                    </div>
                    <div>{date}</div>
                    </Link>
                </div>
               {/*  <div className = "img-container">
                <img style ={{width : 400 }} src = {pic1} />
            </div> */}
            </div>
           
    )
}

export default Post;
