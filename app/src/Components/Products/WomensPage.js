import React from 'react'
import { WomensProduct } from './WomensProduct'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Navbar/SideBar'

const WomensPage = () => {
  return (
    <div><Navbar/>
    <div className='griid'>
    
        
        <div><SideBar/></div>
        <div><WomensProduct/></div>
    </div></div>
  )
}

export default WomensPage