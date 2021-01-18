import React from 'react';

const Friend = (props) => {
  return (
  <div>
    <h3>{props.data.name}</h3>
    <p>{props.data.age}</p>
    <p>{props.data.email}</p>
  </div>
  )
}

export default Friend;