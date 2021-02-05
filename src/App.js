import React from "react";
import Treeimage from "./images/arif-nur-rokhman-IwlgBU6QCYM-unsplash.jpg";
import "./app.css";

export default function App() {
  return (
    <div className="container">
      <h1 className="heading">The last standing Tree...</h1>
      <img className="treeimage" src={Treeimage} alt="Tree" />
      <article></article>
    </div>
  );
}
