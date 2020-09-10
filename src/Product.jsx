import React from "react";
import "./Product.css";
import { useStateValue } from "./contexts/ProductContext";

function Product(props) {
  const [basket, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_PRODUCT",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>
      <div className="product__image">
        <img src={props.image} alt="" />
      </div>
      <div className="product__button">
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
