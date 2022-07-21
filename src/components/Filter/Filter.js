import React from 'react'
import {GiSettingsKnobs} from 'react-icons/gi'
import {AiOutlineArrowsAlt} from 'react-icons/ai'
import './Filter.css'

const Filter = () => {
  return (
    <div className='filter max-width'>

        <div className='filters'>
       <h1> {<GiSettingsKnobs/>} Filters</h1>
        </div>

        <div className='Rating'>
       <h1>Rating 4.0+</h1>
        </div>

        <div className='safe'>
       <h1>Safe and Hygenic</h1>
        </div>

        <div className='veg'>
       <h1>Pure Veg</h1>
        </div>

        <div className='time'>
       <h1> {<AiOutlineArrowsAlt/>} Delivery Time </h1>
        </div>
      
        <div className='offer'>
       <h1>Great Offers</h1>
        </div>
    </div>
  )
}

export default Filter
