import React, { useState } from "react";

import "./Searchbar.css";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [gameName, setGameName] = useState("");

  const navigate = useNavigate();

  const handleSearchGame = (event) => {
    event.preventDefault();
    if (gameName.trim().length !== 0) {
      navigate("/search-games?name=" + gameName);
    }
  };

  const handleSetGameName = (event) => {
    setGameName(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <form
        className="search-form"
        onSubmit={handleSearchGame}
        autoComplete="off"
      >
        <input
          type="text"
          name="gameName"
          value={gameName}
          onChange={handleSetGameName}
          className="search-input"
          placeholder="Search for a game..."
        ></input>
        <button className="search-btn" type="submit">
          <i className="fa-solid fa-magnifying-glass fa-2x icon search-icon"></i>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
