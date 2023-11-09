import React from "react";

import "./GameCard.css";

const GameCard = (props) => {
  return (
    <div className="game-card">
      <div className="card-title-container">
        <h2 className="card-title">{props.name}</h2>
      </div>

      <img src={props.image} alt="Game background" className="card-img" />

      <p className="card-game-rating">
        Rating: {props.rating} <i className="fa-solid fa-star star-icon"></i>
      </p>

      <button className="card-btn">Check it out!</button>
    </div>
  );
};

export default GameCard;
