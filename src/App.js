import React, { useEffect, useContext } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./contexts/ProductContext";
import { useTransition, animated } from "react-spring";
import { AnimatePresence, motion } from "framer-motion";

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
          </Switch>
        </AnimatePresence>
      </animated.div>
    </Router>
  );
}

export default App;
