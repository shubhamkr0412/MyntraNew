import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Navbar/SideBar'
import MensProduct from './MensProduct'
import "./MensPage.css";
import { useEffect } from 'react';


const MensPage = () => {

  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getMensData();

  }, []);

  const getMensData = (page = 1, Category = null, price = null) => {
    if (!Category && !price) {
      // console.log(page);
      fetch(`https://myntraclone1.herokuapp.com/mens?_page=${page}&_limit=9`)
        .then((d) => d.json())
        .then((res) => {
          setLists(res);
        });
      // console.log('Called top');
    } else if (Category !== null) {
      fetch(`https://myntraclone1.herokuapp.com/mens?Category=${Category}`)
        .then((d) => d.json())
        .then((res) => {
          setLists(res);
        });
      // console.log('Called Category');
    } else if (price !== null) {
      fetch(`https://myntraclone1.herokuapp.com/mens`)
        .then((d) => d.json())
        .then((res) => {
          const x = res.filter(setRange);
          // console.log(x);
          setLists(x);
        });
      // console.log('Called Price', lists);
    }

  };

  const addToCart = (a) => {
    // const ary = [...cart];
    // ary.push(a);
    // setCart(a);
    // console.log(typeof(cart));
    if (typeof(cart) === 'object' && cart.length === 0) {
      const ary = Array(a);
      setCart(ary); 
      // console.log(cart);
    }
    else {
      const ary = [...cart];
      ary.push(a);
      setCart(ary);
      // console.log(cart);
    }
  }

  const setRange = e => {
    // console.log(e.price >= 500 && e.price <= 1000);
    return (e.price >= 500 && e.price <= 1000);
  }

  // let ind = 1;

  return (
    <div><Navbar CartItems={cart} />
      <div className='griid'>
        <div><SideBar getMensData={getMensData} /></div>
        <div><MensProduct lists={lists} addToCart={addToCart} /></div>
      </div>
      <div style={{ marginLeft: "550px" }}>
        {" "}
        <button disabled={page === 1 || lists.length !== 9} onClick={() => { setPage(1); getMensData(1, null, null); }}>Prev</button>
        <button disabled={page === 2 || lists.length !== 9} onClick={() => { setPage(2); getMensData(2, null, null); }}>Next</button>
      </div>
      {/* <div className='container'>
        Cart Items:
        {cart.length === 0?<div>No Items in the cart.</div>:cart.map((c) => (
          <div key={c.id}>
            <div>{ind++}.)</div>
            <div className="items">
              <p>
                <span>Category:</span>
                {c.Category}
              </p>
            </div>
            <div className="items">
              <p>
                <span>Price:</span>
                {c.price}
              </p>
            </div>
          </div>))}
      </div> */}
    </div>
  )
}

export default MensPage;