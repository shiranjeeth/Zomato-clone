import React from 'react'
import './Explore.css'
import Exploremap from './Exploremap'

const explorenow =[
 {
 id:1,
 cover : "https://b.zmtcdn.com/data/pictures/0/19987810/144fc8254779fbb0df44c72c8dc1075b_o2_featured_v2.jpg",
 deliverytime : "25mins",
 title :"Arabian Shawarma",
 rating : 4.5,
 offers: "50% OFF",
 proextra : "Pro Extra 10% OFF",
 shopname: "Arabian Shawarma",
 comment:" 55565+ orders placed from here "
 },
 {
    id:2,
    cover :"https://b.zmtcdn.com/data/pictures/3/61053/faa8eb7bed591f785b340cfdff47f9eb_o2_featured_v2.jpg",
    deliverytime :"35mins",
    title : "Chennai's Briyani",
    rating : 4.5,
    offers: "60% OFF",
    proextra : "Pro Extra 10% OFF",
    shopname: "Chennai's Briyani at ChinnaKovil street",
    comment: " 565+ orders placed from here "
    },
    {
        id:3,
        cover :"https://b.zmtcdn.com/data/pictures/7/19723937/d81ce8299020ac0033c10f9eb6388aed_o2_featured_v2.jpg",
        deliverytime : "35mins",
        title : "Butter Chicken",
        rating : 3.5,
        offers: "30% OFF",
        proextra : "Pro Extra 10% OFF",
        shopname: "Akayla shop",
        comment: "65+ orders placed from here"
        },
        {
            id:4,
            cover :"https://b.zmtcdn.com/data/dish_photos/553/9b82a066093835c44c24556020ae5553.jpg",
            deliverytime : "50mins",
            title : "Cafe Grill",
            rating : 4.2,
            offers: "50% OFF",
            shopname: "Cafe Grill hotel",
            comment: "100+ orders placed from here"
    },
    {
        id :5,
        cover :"https://b.zmtcdn.com/data/pictures/1/19892431/9215615b380536f5903fb6c55c2bb0a4_o2_featured_v2.jpg",
        deliverytime : "25mins",
        title : "Noodles",
        rating : 3.2,
        offers: "20% OFF",
        shopname: "Saravana Bhavan",
        comment: "6100+ orders placed from here"
},
{
    id :6,
    cover :"https://b.zmtcdn.com/data/pictures/0/55460/fecf4af4f9bfa06ff6074855387c38e7_o2_featured_v2.jpg",
    deliverytime : "55mins",
    title : "Meals curry",
    rating : 4.2,
    offers: "20% OFF",
    shopname: "Famous Hotel",
    comment: "355+ orders placed from here"
},
{
    id :6,
    cover :"https://b.zmtcdn.com/data/pictures/8/20188958/aaca56f89f9769ba11318085d7757e39_o2_featured_v2.jpg",
    deliverytime : "25mins",
    title : "Fish Fry",
    rating : 4.2,
    offers: "20% OFF",
    shopname: "SK Hotel",
    comment: "255+ orders placed from here"
},
{
    id :7,
    cover :"https://b.zmtcdn.com/data/dish_photos/582/dcffe310aa651252599d9b7f63182582.jpg?output-format=webp",
    deliverytime : "15mins",
    title : "Smoor",
    rating : 3.2,
    offers: "20% OFF",
    shopname: "Samurai Hotel",
    comment: "25+ orders placed from here"
},
{
    id :8,
    cover :"https://b.zmtcdn.com/data/dish_photos/b52/5b95bf10918b567b48aaed556bc59b52.jpg",
    deliverytime : "15mins",
    title : "Tikka Kebab",
    rating : 2.2,
    offers: "20% OFF",
    shopname: "Srm Hotel",
    comment: "825+ orders placed from here"
},
{
    id:9,
    cover :"https://b.zmtcdn.com/data/pictures/6/19544656/09e7e40ef2591f14cf7649dfe2a4fddf_o2_featured_v2.jpg",
    deliverytime : "35mins",
    title : "Monghol Biriyani",
    rating : 3.9,
    offers: "80% OFF",
    proextra : "Pro Extra 10% OFF",
    shopname: "Samudra",
    comment: "695+ orders placed from here"
    },

        
    
]
const Explore = () => {
  return (
    <div className='explore-container max-width'>
        <div className='explore-title'>Best Food in Tuticorin</div>
        <div className='xplore'>
        {explorenow.map((explore)=>{
            return <div ><Exploremap explore={explore}/></div>
        })}
</div>
      
    </div>
  )
}

export default Explore
