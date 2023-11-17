import { useContext, useEffect, useState } from "react";

import GameContext from "../store/gameContext";
import { topRatedGames } from "../services/gameServices";
import { getPageNumber } from "../utils/utils";

import GameList from "../components/GameList/GameList";
import PageWrapperComponent from "../components/PageWrapperComponent/PageWrapperComponent";
import Loader from "../components/Loader/Loader";

const TopGamesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { games, handleSetGames, pageNumber, handleSetPageNumber } =
    useContext(GameContext);
  const paginationNumber = parseInt(getPageNumber("page"));
  handleSetPageNumber(paginationNumber ? paginationNumber : 1);

  useEffect(() => {
    setIsLoading(true);
    topRatedGames(pageNumber).then((response) => {
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

export default TopGamesPage;
