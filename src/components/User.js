import React from 'react'

const User = (props) => {
  return (
    <div className='main-user'>
        <h1>{props.data.name}</h1>
        <h2>{props.data.age}</h2>
    </div>
  )
}

export default User