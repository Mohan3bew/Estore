import React from 'react'

function product(props) {
  return (
    <div>
        <img src={props.img} alt="None" />
        <h1>{props.title}</h1>
        <p>{props.stars}</p>
        <p>{props.price}</p>
    </div>
  )
}

export default product