import React from 'react'

const Delete = (props) => {
    const {id,deletePost} = props
    return (
<<<<<<< HEAD
        <div className='btn delete'><button onClick = {() => deletePost(id)}>Delete</button></div>
    )
}

export default Delete
=======
        <div><button  className='btn deleteBtn' onClick = {() => deletePost(id)}>Delete</button></div>
    )
}

export default Delete
>>>>>>> Helmi
