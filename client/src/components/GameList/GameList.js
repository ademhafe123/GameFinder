import React from "react";

import "./GameList.css";
import GameCard from "../GameCard/GameCard";

import NextPage from "./NextPage";
const GameList = ({ games }) => {
  return (
    <div className="game-list-container">
      {games !== null &&
        games.map((game, index) => {
          return (
            <GameCard
              key={index}
              name={game.name}
              image={game.images[0]}
              rating={game.rating}
            />
          );
        })}
      <NextPage />
    </div>
  );
};

export default GameList;
