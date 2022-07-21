import React from 'react'
import './NightLife.css'
import Slider from 'react-slick'
import NextArrow from '../../carousal/NextArrow';
import PrevArrow from '../../carousal/PrevArrow';
import Nightmap from './Nightmap';
import Filter from '../Filter/Filter'
const nightlife =[
  {
    id:1,
    cover:"https://b.zmtcdn.com/data/pictures/6/19143676/576cd7b0d455ac96efbd271da145932a_featured_v2.jpg",
    title:"Artisain cocktails",
    place:"12 places"
  },
  {
    id:2,
    cover:"https://b.zmtcdn.com/data/pictures/8/20332998/773e3cdd1ec6b873f8fa8e7b41bade0f_featured_v2.jpg",
    title:"Beer in Bar",
    place:"5 places"
  },
  {
    id:3,
    cover:"https://b.zmtcdn.com/data/pictures/8/20332998/773e3cdd1ec6b873f8fa8e7b41bade0f_featured_v2.jpg",
    title:"happie hours",
    place:"7 places"
  },
  {
    id:4,
    cover:"https://b.zmtcdn.com/data/pictures/4/18203014/05d4981faeb4ef426680771ff3a14da0_featured_v2.jpg",
    title:"illusion",
    place:"7 places"
  },
  {
    id:5,
    cover:"https://b.zmtcdn.com/data/pictures/7/20291557/36cb3ab7100f33331f50086e8fe798a4_featured_v2.jpg",
    title:"History pub",
    place:"9 places"
  },
]
const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}

const NightLife = () => {
  return (
    <div className='max-width'>
       <div className='nightlife-title'>Collections</div>
       <Slider {...settings}>
        {nightlife.map((night)=>{
          return <div><Nightmap night={night} /></div>
        })}

       </Slider>
       <Filter/>
    </div>
  )
}

export default NightLife
