import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import AlgorithmContextProvider from "./context/AlgorithmContext";
import UserContextProvider from "./context/UserContext";
ReactDOM.render(
  <AlgorithmContextProvider>
    <UserContextProvider>
      <Router>
        <App />
      </Router>
    </UserContextProvider>
  </AlgorithmContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
