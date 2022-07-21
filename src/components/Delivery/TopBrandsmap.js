import React from 'react'
import './Topbrandsmap.css'

const TopBrandsmap = ({item}) => {
  return (
    <div className='topbrands-map'>
        <div className='brands'>
       <img  src={item.cover} alt={item.id} className="top-brands-img"/>
        </div>
        <div className='top-title'>{item.title}</div>
    </div>
  )
}

export default TopBrandsmap
