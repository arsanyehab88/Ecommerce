import React from 'react'
import HomeMain from '../HomeMain/HomeMain'
import OurProduct from '../OurProduct/OurProduct'
import Slider from '../Slider/Slider'

export default function Home({addItme}) {
  return (
    <div>
      <Slider/>
      <div className='p-5'>
      <HomeMain/>
      
      <OurProduct addItme={addItme}/>
      </div>
    </div>
  )
}
