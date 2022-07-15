import React from "react";
import Search from "./Search";
import linkylogoonobg from "../images/linkyLogoonobg.png";
import "../Navbar.css";

export default function Navbar({ setData, setbBtnText }) {
  return (
    <div className="nav">
      <div className="logo">
        <img src={linkylogoonobg} alt="LINKY LOGO" />
      </div>

      <Search setData={setData} setbBtnText={setbBtnText} />
    </div>
  );
}
