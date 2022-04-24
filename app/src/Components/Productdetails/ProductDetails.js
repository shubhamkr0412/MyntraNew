import React from "react";
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";

import styled from "@emotion/styled";

const DIV1 = styled("div")({
  display: "flex",
  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
  width: "85%",
  margin: "150px auto",
  gap: "1px",
});

const DIV3 = styled("div")({
  width: "39.5%",
  borderRight: "2px solid grey",
  padding: "30px",
});
const DIV4 = styled("div")({
  padding: "30px",
  width: "59.5%",
});

const DIV = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "65%",
});

function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  
 
  useEffect(() => {
    fetch(` https://myntradata.herokuapp.com/mens/${id}`)
    .then((d) => d.json())
    .then((res) => {
      setData(res);

    });
  }, []);
 
  
console.log(data);
  return (
    <>
      <DIV1>
        <DIV3 className="hoverStyle">
         
          <img width={"90%"} src={data.img} alt="No" key={data.id} />
        </DIV3>
        <DIV4>
          <p
            style={{ fontWeight: "500", fontFamily: "serif", fontSize: "30px" }}
          >
            {data.title}
          </p>
          
          <br />
          <DIV>
            <img
              width={"18%"}
              src="https://www.pngkit.com/png/detail/39-399026_4-1-2-stars-logo-4-stars.png"
              alt=""
            />
            <p>4/5</p>
            <p> Ratings &  Reviews</p>
            <p>64 Q&As</p>
          </DIV>
          <br />

          <p style={{ fontWeight: "500", fontFamily: "serif", color: "grey" }}>
            MRP: <strike style={{ color: "grey" }}>₹3000</strike>
            <span style={{ fontSize: "20px", color: "black" }}>
              {" "}
              ₹{data.price}{" "}
            </span>
            
          </p>
          <br />
          <p
            style={{
              width: "90%",
              backgroundColor: "#eceef0",
              padding: "10px",
              marginTop: "30px",
            }}
          >
            Shop worth INR 5000 and above and get a free gift voucher . Terms & conditions apply. Offer valid until stock lasts.
          </p>

          <br />

          <div
           
            style={{
              width: "40%",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "700",
              color: "white",
              backgroundColor: "#fc2779",
              padding: "20px",
              margin: "auto",
              marginTop: "30px",
            }}
          >
            ADD TO BAG
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              height: "60px",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#eceef0",
              marginTop: "50px",
            }}
          >
            <div>100% Genuine Products</div>
            <div>Easy Return Policy</div>
            <div>Sold by Myntra  </div>
          </div>
        </DIV4>
      </DIV1>
    </>
  );
}

export default ProductDetails;
