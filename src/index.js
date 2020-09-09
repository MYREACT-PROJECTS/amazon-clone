import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {ProductProvider} from "./contexts/ProductContext";
import {productReducer, initialState} from "./reducers/ProductReducer";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider initialState={initialState} reducer={productReducer}>
      <App />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
