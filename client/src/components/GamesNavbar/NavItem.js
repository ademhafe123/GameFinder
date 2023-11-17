import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import "./GamesNavbar.css";
import GameContext from "../../store/gameContext";

const NavItem = (props) => {
  const navigate = useNavigate();
  const { handleSetPageNumber } = useContext(GameContext);

  const handleClick = () => {
    handleSetPageNumber(1);
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
