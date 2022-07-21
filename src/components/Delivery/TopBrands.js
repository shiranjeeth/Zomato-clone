import React from 'react'
import TopBrandsmap from './TopBrandsmap'
import  './Topbrands.css'
import Slider from 'react-slick'
import NextArrow from '../../carousal/NextArrow';
import PrevArrow from '../../carousal/PrevArrow';


    const topbrand = [
        {
            id : 1,
            title : "mcDonalds",
            cover : "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png"
        },
        {
            id : 2,
            title : "Kfc",
            cover : "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png"

        },
        {
            id : 3,
            title : "Dominos",
            cover : "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png"

        },
        {
            id : 4,
            title : "BurgerKing",
            cover : "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png",
        },
        {
            id : 5,
            title : "PizzaHut",
            cover : "https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210633.png"

        }
    ]
    const settings = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      }
      const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='container-title'>Top brands</div>
        <div className='top-brands map'>
            <Slider {...settings}>
            {topbrand.map((item)=>{
                return  <div><TopBrandsmap item={item}/></div>
            })}
         </Slider>

        </div>
    </div>
  )
}

export default TopBrands
