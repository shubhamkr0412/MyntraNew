{/* <Navbar/>
 
     <h1>{myState}</h1>
     <button onClick={()=>dispatch(incNumber())}>Plus</button>
     <button onClick={()=>dispatch(decNumber())}>Minus</button> */}
//     {/* <Routes>
   
//     <Route exact path="/" element={< HomePage />}/> 
//     {/* <MensPage/> */}
<div className="inside" key={curr.id}>
             
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
    <span>Add to Cart:</span>
    <button onClick={() => addToCart(curr)}>+</button>
  </p>
</div>
</div> 