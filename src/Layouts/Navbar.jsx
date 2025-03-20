import React from "react";
import "./Navbar.css";
import log from "../assets/log.png";
function Navbar() {
  const categories = [
    "المواد التعليمية",
    "نبذة عن المحتوى",
    "من نحن",
    "عن الموقع",
  ];

  return (
    <div>
      <div className="MainNav">
        <div className="TextBar">
          {categories
            .slice()
            .reverse()
            .map((category, index) => (
              <a key={index} href="#">
                {category}
              </a>
            ))}
        </div>

        <img src={log} className="imgBar" />
      </div>

      <div className="BottomBorder"></div>
    </div>
  );
}

export default Navbar;
