import React from "react";

import "./MensPage.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const KidsProduct = () => {
    const [women, setWomen] = useState([]);
    const [pages, setPages] = useState(1);
    useEffect(() => {
      getWomensData();
    }, []);
    const getWomensData = () => {
        fetch(`https://myntradata.herokuapp.com/mens?_page=${pages}&_limit=9`)
          .then((d) => d.json())
          .then((res) => {
            setWomen(res);
          });
      };
  return (
    <div><div className="containerr">
    {women.map((curr) => {
      return (
        <>
          <div className="inside" key={curr.id}>
          <div className="items">
              <Link to ={`/mens/${curr.id}`}> <img width={"60%"} src={curr.img}/></Link>
                
                </div>
            <div className="items">
              <p>
                <span>Name:</span>
                {curr.title}
              </p>
            </div>
            <div className="items">
              <p>
                <span>Category:</span>
                {curr.Category}
              </p>
            </div>
            <div className="items">
              {" "}
              <p>
                <span>Price:</span>
                {curr.price}
              </p>
            </div>
          </div>
        </>
      );
    })}
  </div>
  <div style={{ marginLeft: "550px" }}>
    {" "}
    <button disabled={pages===1} onClick={()=>setPages(pages-1)}>Prev</button>
    <button disabled={pages===2} onClick={()=>setPages(pages+1)}>Next</button>
  </div></div>
  )
}

