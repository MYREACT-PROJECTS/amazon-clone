import React from "react";
import "./Checkout.css";
import BasketItem from "./BasketItem";
import Subtotal from "./Subtotal";
import { useStateValue } from "./contexts/ProductContext";
import FlipMove from "react-flip-move";
import { motion } from "framer-motion";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="checkout"
    >
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
          {basket.map((item) => (
            <BasketItem
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </motion.div>
  );
}

export default Checkout;
