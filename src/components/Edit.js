import React from 'react'

const Edit = (props) => {
    const {id,editPost} = props
    return (
        <div >
            <button className='btn editBtn' onClick = {() => editPost(id)}>Edit</button>
        </div>
    )
}

export default Edit
