import React from 'react'

function ProductCategory(props) {
  return (
    <div className='productCategory'>
        <a href={props.img}>
        <p>{props.category}</p>
        </a> 
    </div>
  )
}

export default ProductCategory