import React from "react";

import { useNavigate } from "react-router-dom";
import "./GamesNavbar.css";

const NavItem = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.navigate);
  };
  return (
    <li
      className={props.isActive ? "navbar-item active-item" : "navbar-item"}
      onClick={handleClick}
    >
      {props.title}
    </li>
  );
};

export default NavItem;
