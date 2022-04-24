import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import dataSlider from '../Slider/dataSlider'
import { useState } from 'react';
import Content from './Content';
const HomePage = () => {
  const [data, setData] = useState(dataSlider);
  return (
    <div><Navbar/>
    <Slider  data={data} num={7}/>
   
    </div>
 
  )
}

export default HomePage