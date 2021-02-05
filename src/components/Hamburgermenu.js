import React from "react";
import "./hamburger.css";

export default function Hamburgermenu() {
  return (
    <header className="menu-items">
      <div className="logo">
        <h3>SpiritBlogs</h3>
      </div>
      <div className="forcursor">
        <span className="menu"></span>
        <span className="menu"></span>
        <span className="menu"></span>
      </div>
    </header>
  );
}
