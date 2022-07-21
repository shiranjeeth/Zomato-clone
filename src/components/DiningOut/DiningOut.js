import React from 'react'
import './DiningOut.css'
import Diningoutmap from './Diningoutmap'
import Slider from 'react-slick'
import NextArrow from '../../carousal/NextArrow';
import PrevArrow from '../../carousal/PrevArrow';
import Filter from '../Filter/Filter';
import Explore from '../../explore/Explore';

const diningout =[
  {
id : 1,
title : "chutney chang",
cover : "https://b.zmtcdn.com/data/pictures/5/53165/bb53c91aa06defab7c0c0d57cc63a891_featured_v2.jpg",
rating : 3.9,
adress : "church street banglore",
price : "1500 for two",
  },
  {
    id : 2,
    title : "Houses of common",
    cover : "https://b.zmtcdn.com/data/pictures/0/18323630/c65f9e7b14db9b5456698ce92a86174d_featured_v2.jpg",
    rating : 2.9,
    adress : "koramangala 5th street , banglore",
    price : "2000 for two",
     },
     {
      id : 3,
      title : "the Black Pearl",
      cover : "https://b.zmtcdn.com/data/pictures/2/54162/14b10eef2814d64722f0e0ac0481e620_featured_v2.jpg",
      rating : 3.5,
      adress : "koramangala 5th street , banglore",
      price : "1800 for two",
   },
   {
    id : 4,
    title : "Copper Kitchen",
    cover : "https://b.zmtcdn.com/data/pictures/3/19583843/da3a914d944baec6b3272653aeb46397_featured_v2.jpg",
    rating : 4.5,
    adress : "HSR , banglore",
    price : "2000 for two",
 },
 {
  id : 5,
  title : "Street Storys",
  cover : "https://b.zmtcdn.com/data/pictures/3/19049583/ce2f1bec031d3e54da56f8f530cd2102_featured_v2.jpg",
  rating : 4.1,
  adress : "Indirangar, banglore",
  price : "1000 for two",
},
{
  id : 6,
  title : "Samurai",
  cover : "https://b.zmtcdn.com/data/pictures/6/18727906/7f280675ab76dc8f666a207d64e2e993_featured_v2.jpg",
  rating : 4.4,
  adress : "koramangala 5th street , banglore",
  price : "1800 for two",
},
{
  id : 7,
  title : "XOOX Brewmill",
  cover : "https://b.zmtcdn.com/data/pictures/4/20279484/a355b2f777df734a0c61c70f177be34a_featured_v2.jpg",
  rating : 4.2,
  adress : "koramangala 6th street , banglore",
  price : "300 for two",
},
]
const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}


const DiningOut = () => {
  return (
    <div className='max-width'>
      <div className='dining-title'> Collections</div>
      <Slider {...settings}>
        {diningout.map((dining)=>{
          return <div><Diningoutmap dining={dining}/></div>
        })}
      </Slider>
      <Filter/>
      <Explore/>
    </div>
  )
}

export default DiningOut
