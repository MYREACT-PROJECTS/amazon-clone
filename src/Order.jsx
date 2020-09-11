import React, { useState, useEffect } from "react";
import "./Order.css";
import moment from "moment";
import BasketItem from "./BasketItem";
import { useStateValue } from "./contexts/ProductContext";
import CurrencyFormat from "react-currency-format";

const Order = (props) => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(props.order.data.created).format("MMMM Do YY, h:mma")}</p>
      <p className="order__id">
        <small>{props.order.id}</small>
      </p>
      {props.order.data.basket?.map((item) => (
        <BasketItem
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => <h3 className="order__total">Order Total: {value}</h3>}
        decimalScale={2}
        value={props.order.data.amount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;
