import React, { useState } from "react";
function Items({ product, pricePerUnit }) {
  const [add, setAdd] = useState(0);
  const clickHandler = () => {
    setAdd(add + 1);
  };
  const removeHandler = () => {
    if (add > 0) {
      setAdd(add - 1);
    } else {
      setAdd(0);
    }
  };
  return (
    <>
      <div>
        <h1 className="cart">
          {product}- ₹{pricePerUnit}
        </h1>
        <h2>TotalProducts-{add}</h2>
        <button onClick={clickHandler}>Add to Cart</button>
        <span> {add} </span>
        <button onClick={removeHandler}>Remove</button>
      </div>
    </>
  );
}
export default Items;
