import React from "react";
import { useHistory } from "react-router-dom";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./contexts/ProductContext";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const history = useHistory();
  const getBasketTotal = (basket) => {
    const total = basket.reduce((acc, product) => acc + product.price, 0);
    return total;
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}) items: <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={(e) => history.push("/payment")}
        className="subtotal__button"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
