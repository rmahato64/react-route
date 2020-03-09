import React from 'react'
import { Link } from 'react-router-dom';
const Add = ({title,description,category,id,addPost,handleChange}) => {
    return (
        <div>
           <div>
              Title : <input type = "text" name = 'title' value = {title} onChange = {handleChange}></input> 
            </div> 
            <div>
              Category : <input type = "text" name = 'category' value = {category} onChange = {handleChange}></input> 
            </div> 
            <div>Write New Post</div>
            <div>
                <textarea type = "text" name = 'description' value = {description} onChange = {handleChange}></textarea>
            </div>
            <div>
                <Link to='/'><button onClick = {() => addPost()}>Add</button> </Link>
                <Link to='/'> <button>Cancel</button> </Link>
            </div>
        </div>
    )
}

export default Add
