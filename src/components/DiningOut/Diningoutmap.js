import React from 'react'
import './Diningoutmap.css'

const Diningoutmap = ({dining}) => {
  return (
    <div className='delivery-mapc '>
    <img src={dining.cover} alt={dining.title} className="delivery-image"/>
    <div className='delivery-title'>{dining.title}</div>
    <div className='delivery-rating'>{dining.rating}</div>
    <div className='delivery-adress'>{dining.adress}</div>
    <div className='delivery-price'>{dining.price}</div>
    </div>
  )
}

export default Diningoutmap
