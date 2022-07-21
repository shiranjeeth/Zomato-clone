import React from 'react'
import {AiTwotoneStar} from 'react-icons/ai'
import './Exploremap.css'


const Exploremap = ({explore}) => {
  return (
    <div className='explore-map-container'>
        <div className='explore-card'>
            <div className='card-cover'>
      <img  src={explore.cover} alt={explore.title} className="explore-map-img"/>
      <div className="explore-deliverytime" > {explore.deliverytime}</div>
      <div className="explore-proextra" > {explore.proextra}</div>
      <div className="explore-offers" > {explore.offers}</div>
      <div className="explore-title" > {explore.title} </div>
      <div className='explore-rating'> {explore.rating}  {AiTwotoneStar} </div>
      <div className="explore-shopname" > {explore.shopname}</div>
      <div className="explore-comment" > {explore.comment}</div>
      </div>
      </div>
    </div>
  )
}

export default Exploremap
