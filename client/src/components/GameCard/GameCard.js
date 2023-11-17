import React, { useState } from "react";

import "./GameCard.css";

import Loader from "../Loader/Loader";

const GameCard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleOnLoad = () => {
    setIsLoading(() => false);
  };
  const handleOnLoadStart = () => {
    setIsLoading(() => true);
  };
  return (
    <div className="game-card">
      <div className="card-title-container">
        <h2 className="card-title">{props.name}</h2>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <img
          onLoadStart={handleOnLoadStart}
          onLoad={handleOnLoad}
          src={props.image}
          alt="Game background"
          className="card-img"
        />
      )}

      <p className="card-game-rating">
        Rating: {props.rating} <i className="fa-solid fa-star star-icon"></i>
      </p>

      <button className="card-btn">Check it out!</button>
    </div>
  );
};

export default GameCard;
