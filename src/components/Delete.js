import React from 'react'

const Delete = (props) => {
    const {id,deletePost} = props
    return (
        <div><button  className='btn deleteBtn' onClick = {() => deletePost(id)}>Delete</button></div>
    )
}

export default Delete
