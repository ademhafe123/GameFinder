import React, { useCallback, useState } from "react";

const GameContext = React.createContext({
  games: [],
  handleSetGames: () => {},
  pageNumber: Number,
  handleSetPageNumber: () => {},
});

export default GameContext;

export const GameContextProvider = (props) => {
  const [games, setGames] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const handleSetGames = useCallback((data) => {
    setGames(data);
  }, []);

  const handleSetPageNumber = (data) => {
    setPageNumber(data);
  };

  return (
    <GameContext.Provider
      value={{
        games,
        pageNumber,
        handleSetGames,
        handleSetPageNumber,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
