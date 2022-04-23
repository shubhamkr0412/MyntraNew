import React from "react";
import "./MensPage.css";
import { Link } from "react-router-dom";

const MensProduct = ({ lists, addToCart }) => {

  // console.log(page);
  return (
    <>
      <div className="containerr">
        {lists.map((curr) => {
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
                <div className="items">
                  {" "}
                  <p>
                    
                    <button onClick={() => addToCart(curr)}>Add to cart</button>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MensProduct;
