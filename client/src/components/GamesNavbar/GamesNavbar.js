import React from "react";

import "./GamesNavbar.css";
import NavItem from "./NavItem";
import { useLocation } from "react-router-dom";

const GameListNavbar = () => {
  const location = useLocation();
  let popular = false;
  let topRated = false;
  let latest = false;
  if (location.pathname === "/") popular = true;
  else if (location.pathname === "/top-rated-games") topRated = true;
  else if (location.pathname === "/latest-games") latest = true;

  return (
    <div className="game-list-navbar">
      <ul className="navbar-list">
        <NavItem title="Popular Games" isActive={popular} navigate="/" />
        <li className="navbar-separator">|</li>
        <NavItem
          title="Top Rated"
          isActive={topRated}
          navigate="/top-rated-games"
        />
        <li className="navbar-separator">|</li>
        <NavItem
          title="Latest Games"
          isActive={latest}
          navigate="/latest-games"
        />
      </ul>
    </div>
  );
};

export default GameListNavbar;
