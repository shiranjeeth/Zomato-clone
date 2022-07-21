import React from 'react'
import Explore from '../../explore/Explore'
import Filter from '../Filter/Filter'
import "./Delivery.css"
import DeliveryCollection from './DeliveryCollection'
import TopBrands from './TopBrands'

const Delivery = () => {
  return (
    <div>
     <Filter/>

     <div>
      <DeliveryCollection/>
      <TopBrands/>
      <Explore/>
    </div>

    </div>
   
  )
}

export default Delivery
