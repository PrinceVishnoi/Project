import React, { useState } from "react";
import { products } from "./cart";
import Items from "./Items";

function Newcart() {
  const [item, setItem] = useState(products);
  return (
    <>
      {item.map((currItem) => {
        return <Items key={currItem.id} {...currItem} />;
      })}
    </>
  );
}
export default Newcart;
