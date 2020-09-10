import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { motion } from "framer-motion";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      if (auth) {
        history.push("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="login"
    >
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Amazon_logo.jpg/1200px-Amazon_logo.jpg"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form className="login__form" action="">
          <h5>E-mail</h5>
          <input
            type="text"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button onClick={signIn} className="login__button">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login__button--register">
          Create your Amazon Account
        </button>
      </div>
    </motion.div>
  );
}

export default Login;
