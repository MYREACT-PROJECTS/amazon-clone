import React, { useEffect, useContext } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./payment/Payment";
import { auth } from "./firebase";
import { useStateValue } from "./contexts/ProductContext";
import { animated } from "react-spring";
import { AnimatePresence, motion } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HQ6OXCp5CleaAUqSCTZvakGZgZJdObtwtCmLz8h7PQ6enRVFfG0KEj2eMRkKR0gQMlkjUL9r0184Z4uWmj1fG5300d7tuXiWS"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <animated.div className="app">
        <AnimatePresence>
          <Switch>
            <Route path="/" exact>
              <Header />
              <Home />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
          </Switch>
        </AnimatePresence>
      </animated.div>
    </Router>
  );
}

export default App;
