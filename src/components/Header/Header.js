import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import {AiFillCaretDown} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import  coffee from './cofeecup.jpg'

import './Header.css'

const Header = () => {
  return (
    <div className='max-width header'>

 <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*'
   alt="zomato logo"
   className='header-logo'
   />

   <div className='header-right'>

    <div className='header-location-search-container'>

      <div className='location-wrapper'>

        <div className='location-icon-name'>

      {<MdLocationOn className="location-icon"/>}

      <div>Banglore</div>

      </div>
      {<AiFillCaretDown className='absolute-center'/>}

      </div>

      <div className='location-search-seperator'></div>

     <div className='header-search-bar'>

      <div className='absolute-center search-icon'>{<BsSearch/>}

      <input placeholder='search for restaurent, crusine or dish'
      className='search-input'/>

    </div>
    </div>
    </div>

    <div className='profile-wrapper'>
      
<img src={coffee}
 alt='zomato mug'
 className='header-profile-image'/>

 <span className='header-user-name'>Shiran</span>

 {<AiFillCaretDown className='absolute-center profile-options-icon'/>}

</div>
</div>
</div>
  )
}
export default Header
