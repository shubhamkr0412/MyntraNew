import React from 'react'

import { KidsProduct } from './KidsProduct'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Navbar/SideBar'
const KidsPage = () => {
  return (
    <div><Navbar/>
    <div className='griid'>
    
        
        <div><SideBar/></div>
        <div><KidsProduct/></div>
    </div></div>
  )
}

export default KidsPage