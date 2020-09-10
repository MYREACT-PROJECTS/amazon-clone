import React from "react";
import "./BasketItem.css";
import { useStateValue } from "./contexts/ProductContext";

function BasketItem(props) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_PRODUCT",
      id: props.id,
    });
  };
  return (
    <div className="basket">
      <img className="basket__image" src={props.image} alt="" />
      <div className="basket__info">
        <p className="basket__title">{props.title}</p>
        <p className="basket__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="basket__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="basket__button">Remove from basket</button>
      </div>
    </div>
  );
}

export default BasketItem;
