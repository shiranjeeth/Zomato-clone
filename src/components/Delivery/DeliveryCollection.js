import React from 'react'
import "./DeliveryCollection.css"
import Slider from 'react-slick'
import NextArrow from '../../carousal/NextArrow';
import PrevArrow from '../../carousal/PrevArrow';
import Deliveryitemmap from './Deliveryitemmap';

const deliveryitems=[
    {
        id : 1,
        title : "pizza",
        cover : "https://b.zmtcdn.com/data/pictures/chains/9/19170309/e65f7f6325e80a7258fae8fbee9dc43a_o2_featured_v2.jpg"
    },
    {
        id : 2,
        title : "burger",
        cover : "https://b.zmtcdn.com/data/dish_photos/665/2d0204a7e406025967e47836f1b8e665.jpg?output-format=webp"
    },
    {
        id : 3,
        title : "shawarma",
        cover : "https://b.zmtcdn.com/data/dish_photos/35e/0238ee755349fe48a6ed1046cfb2235e.jpg?output-format=webp"
    },
    {
        id : 4,
        title : "Chaat",
        cover : "https://b.zmtcdn.com/data/dish_photos/348/5c2ae1f0873c20968b9d1d8a62cd6348.jpg?output-format=webp"
    },
    {
        id : 5,
        title : "sandwich",
        cover : "https://b.zmtcdn.com/data/dish_photos/79f/5134ab556a159ab2d7e13570adf5e79f.jpg?output-format=webp"
    },
    {
        id : 6,
        title : "Biriyani",
        cover : "https://b.zmtcdn.com/data/pictures/3/50643/254714405916cbd9b6b12ce946660843_o2_featured_v2.jpg"
    },
    {
        id : 7,
        title : "icecream",
        cover : "https://b.zmtcdn.com/data/pictures/0/19056370/7f5e092d8c5793ef724dc3239ff773e4_o2_featured_v2.jpg?output-format=webp"
    },
    {
        id : 8,
        title : "dosa",
        cover : "https://b.zmtcdn.com/data/dish_photos/564/c2276ea20f69c4a406762f720989a564.jpg?output-format=webp"
    },
    {
        id : 9,
        title : "idly",
        cover : "https://b.zmtcdn.com/data/pictures/2/18978752/193d36f1e9ace6ba971b1287607fccff_o2_featured_v2.jpg?output-format=webp"
    },
    {
        id : 10,
        title : "cake",
        cover : "https://b.zmtcdn.com/data/dish_photos/75b/48f19a78412a5e4e1cc426de3e81d75b.jpg"
    },
    {
        id : 11,
        title : "Chapathi",
        cover : "https://b.zmtcdn.com/data/dish_photos/105/3218e54f3cae96295c24e24ec2d6e105.jpg?output-format=webp"
    },
]
const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

const DeliveryCollection = () => {
  return (
    <div className='delivery-collection'>
        <div className='max-width'>
            <div className='collection'>Eat what makes you happy</div>
            <Slider {...settings}>
                {deliveryitems.map((item)=>{
                    return <div><Deliveryitemmap item={item}/></div>
                })}
            </Slider>
        </div>
      
    </div>
  )
}

export default DeliveryCollection
