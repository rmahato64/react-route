import React from 'react'

const Delete = (props) => {
    const {id,deletePost} = props
    return (
        <div className='btn delete'><button onClick = {() => deletePost(id)}>Delete</button></div>
    )
}

export default Delete