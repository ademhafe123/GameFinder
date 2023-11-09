import React, { useState } from "react";

const GameContext = React.createContext({
  games: [],
  handleSetGames: () => {},
});

export default GameContext;

export const GameContextProvider = (props) => {
  const [games, setGames] = useState([]);

  const handleSetGames = (data) => {
    setGames(data);
  };

  return (
    <GameContext.Provider
      value={{
        games,
        handleSetGames,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
