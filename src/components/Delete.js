import React from 'react'

const Delete = (props) => {
    const {id,deletePost} = props
    return (
        <button onClick = {() => deletePost(id)}>Delete</button>
    )
}

export default Delete
