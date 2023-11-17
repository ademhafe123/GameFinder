import { useContext, useEffect, useState } from "react";

import { popularGames } from "../services/gameServices";
import GameContext from "../store/gameContext";
import { getPageNumber } from "../utils/utils";

import GameList from "../components/GameList/GameList";
import PageWrapperComponent from "../components/PageWrapperComponent/PageWrapperComponent";
import Loader from "../components/Loader/Loader";

const GameListPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { games, handleSetGames, handleSetPageNumber, pageNumber } =
    useContext(GameContext);
  const paginationNumber = parseInt(getPageNumber("page"));
  handleSetPageNumber(paginationNumber ? paginationNumber : 1);

  useEffect(() => {
    setIsLoading(true);
    popularGames(pageNumber).then((response) => {
      handleSetGames(response.data);
      setIsLoading(false);
    });
  }, [handleSetGames, pageNumber]);

  return (
    <PageWrapperComponent>
      {isLoading ? <Loader /> : <GameList games={games} />}
    </PageWrapperComponent>
  );
};

export default GameListPage;
