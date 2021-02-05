import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import Hamburger from "./components/Hamburgermenu";

ReactDOM.render(
  <>
    <div className="content">
      <Hamburger />
      <App />
    </div>
  </>,

  document.getElementById("root")
);
