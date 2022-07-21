import React from 'react'
import './Deliveryitemmap.css'

const Deliveryitemmap = ({item}) => {
  return (
    <div className='delivery-item-cover'>
 <img src={item.cover} alt={item.title} className="item-image"/>
 <div className='item-title'>{item.title}</div>
    </div>
  )
}

export default Deliveryitemmap
