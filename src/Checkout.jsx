import React from "react";
import "./Checkout.css";
import BasketItem from "./BasketItem";
import Subtotal from "./Subtotal";
import { useStateValue } from "./contexts/ProductContext";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__img"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h1>Shopping Cart</h1>
          <h2 className="checkout__title">
            Your Shopping Cart
            {basket.length !== 0 ? ` hat ${basket.length} items` : " is empty"}
          </h2>
          <BasketItem />
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
