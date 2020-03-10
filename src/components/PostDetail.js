import React from 'react';
import ViewPost from './ViewPost';

// const PostDetail = (props) => {
//     const {id,title,category,description,contentEditable} = props.post
//     const {deletePost,editPost,inputTitle} = props

//     return (
//         <div >
//             Test test
//             {/* <ViewPost title = {title} category = {category} description = {description} id = {id} deletePost = {deletePost} editPost = {editPost} contentEditable = {contentEditable} inputTitle = {inputTitle}/> */}
//         </div>
//     )
// }

const PostDetail = (props) => {
    const {id,title,category,description,contentEditable} = props.post
    const {deletePost,editPost,inputTitle} = props    
    
        return (
            <div>
                <ViewPost title = {title} category = {category} description = {description} id = {id} editPost = {editPost} contentEditable = {contentEditable} inputTitle = {inputTitle}/>));
            </div>
        )
    
    

}

export default PostDetail;