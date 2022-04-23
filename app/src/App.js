
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

import { Button, Stack } from '@mui/material';

import MensProduct from './Components/Products/MensProduct';
import { Box } from '@mui/system';
import HomePage from './Components/HomePage/HomePage';
import MensPage from './Components/Products/MensPage';
import WomensPage from './Components/Products/WomensPage';
import KidsPage from './Components/Products/KidsPage';
import Navbar from './Components/Navbar/Navbar';


function App() {
  const myState=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  return (
    
    <div>
    <Routes>
   
    <Route exact path="/" element={< MensPage />}/> 
    <Route exact path="/mens" element={< MensPage />}/> 
    <Route exact path="/womens" element={< WomensPage />}/> 
    <Route exact path="/kids" element={< KidsPage />}/> 
    
    </Routes>
    </div>
  );
}

export default App;
