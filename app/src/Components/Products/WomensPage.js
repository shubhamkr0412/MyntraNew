import React from 'react'
import { WomensProduct } from './WomensProduct'
import Navbar from '../Navbar/Navbar'
import LeftBar from '../Navbar/LeftBar'
import { useState } from 'react'
import { useEffect } from 'react';
import styled from '@emotion/styled';
const Button=styled("button")({
  width:"100px",
  height:"30px",
  backgroundColor:"coral",
  margin:"40px 50px "
})


const WomensPage = () => {
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getMensData();

  }, []);

  const getMensData = (page = 1, Category = null, price = null) => {
    if (!Category && !price) {
      // console.log(page);
      fetch(` https://myntradata.herokuapp.com/womens?_page=${page}&_limit=9`)
        .then((d) => d.json())
        .then((res) => {
          setLists(res);
        });
      // console.log('Called top');
    } else if (Category !== null) {
      fetch(` https://myntradata.herokuapp.com/womens?Category=${Category}`)
        .then((d) => d.json())
        .then((res) => {
          setLists(res);
        });
      // console.log('Called Category');
    } else if (price !== null) {
      fetch(` https://myntradata.herokuapp.com/womens`)
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

  return (
    <div><Navbar CartItems={cart} />
      <div className='griid'>
        <div><LeftBar getMensData={getMensData} /></div>
        <div><WomensProduct lists={lists} addToCart={addToCart} /></div>
      </div>
      <div style={{ marginLeft: "550px" }}>
        {" "}
        <Button disabled={page === 1 || lists.length !== 9} onClick={() => { setPage(1); getMensData(1, null, null); }}>Prev</Button>
        <Button disabled={page === 2 || lists.length !== 9} onClick={() => { setPage(2); getMensData(2, null, null); }}>Next</Button>
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

export default WomensPage