import React from 'react'
import { useState } from 'react'
import Delivery from '../components/Delivery/Delivery'
import DiningOut from '../components/DiningOut/DiningOut'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import NightLife from '../components/NightLife/NightLife'
import TabOptions from '../components/TabOptions/TabOptions'

const HomePage = () => {
    const [active,setactive]=useState("Delivery")
  return (
    <div>
      <Header/>
      <TabOptions active={active} setactive={setactive}/>
      {getCorretscreen(active)}
      <Footer/>
     
    </div>
  )
}
const getCorretscreen =(tab)=>{
    switch(tab){
        case "Delivery" : return <Delivery/>
        case "Dining out" : return <DiningOut/>
        case "Nightlife" : return <NightLife/>
        default : <Delivery/>
    }
}

export default HomePage
