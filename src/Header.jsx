import React, { useState } from "react";
import "./Header.css";
import Search from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./contexts/ProductContext";
import { useSpring, animated } from "react-spring";

function Header() {
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    console.log(user);
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Search className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionOne">
            Hello {user ? `${user.email}` : "Guest"}
          </span>
          <Link to={!user && "/login"}>
            <span onClick={handleAuthentication} className="header__optionTwo">
              {user ? "Sign Out" : "Sign In"}{" "}
            </span>
          </Link>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Returns</span>
          <span className="header__optionTwo">&Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Your</span>
          <span className="header__optionTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <Link to="/checkout">
            <ShoppingCart />
          </Link>
          <span
            className={
              basket.length > 0
                ? "header__optionTwo header__basketCount--green"
                : "header__optionTwo header__basketCount"
            }
          >
            {basket.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
