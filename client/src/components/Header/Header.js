import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import Searchbar from "../Searchbar/Searchbar";

const Header = () => {
  return (
    <header id="header">
      <div className="header-container">
        <img src={logo} alt="logo" className="logo" />
        <Searchbar />
      </div>
    </header>
  );
};

export default Header;
