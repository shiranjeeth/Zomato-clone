import React from 'react'
import './Nightmap.css'

const Nightmap = ({night}) => {
  return (
    <div className='night-con'>
        <img src={night.cover} alt={night.title} className="night-img"/>
        <div className='night-title'>{night.title}</div>
        <div className='night-place'>{night.place}</div>     
    </div>
  )
}

export default Nightmap
