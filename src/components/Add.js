import React from 'react'
import { Link } from 'react-router-dom';

const Add = ({title,description,category,id,addPost,handleChange}) => {
    return (
<<<<<<< HEAD
        <div className = "post-container">
=======
        <div className = "form-container">
>>>>>>> Helmi
            <div>
                <h1>New Post</h1>
            </div>
            <div className="form-inner">
                 <div className="input-holder">
                    <span className="label"> Title:</span>
                    <input  className = "input-text" type = "text" name = 'title' value = {title} onChange = {handleChange}></input> 
                </div> 
                <div className="input-holder">
                    <span className="label"> Category:</span>
                    <input  className = "input-text" type = "text" name = 'category' value = {category} onChange = {handleChange}></input> 
                </div> 
                <div className = "input-holder">
                    <span className="label"> Write new post:</span> 
                    <textarea className="input-text" type = "text" name = 'description' value = {description} onChange = {handleChange}></textarea>
                </div>
                <div>
                    <Link to='/'><button className="postBtn" onClick = {() => addPost()}>Add</button></Link>
                    <Link to='/'><button className ="cancelBtn">Cancel</button></Link>
                </div>
            </div>        
        </div>
    )
}

export default Add

// import React from 'react'
// import { Link } from 'react-router-dom';
// const Add = ({title,description,category,id,addPost,handleChange}) => {
//     return (
//         <div>
//            <div>
//               Title : <input type = "text" name = 'title' value = {title} onChange = {handleChange}></input> 
//             </div> 
//             <div>
//               Category : <input type = "text" name = 'category' value = {category} onChange = {handleChange}></input> 
//             </div> 
//             <div>Write New Post</div>
//             <div>
//                 <textarea type = "text" name = 'description' value = {description} onChange = {handleChange}></textarea>
//             </div>
//             <div>
//                 <Link to='/'><button onClick = {() => addPost()}>Add</button> </Link>
//                 <Link to='/'> <button>Cancel</button> </Link>
//             </div>
//         </div>
//     )
// }

<<<<<<< HEAD
// export default Add
=======
// export default Add
>>>>>>> Helmi
