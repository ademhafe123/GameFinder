import { useContext, useEffect, useState } from "react";
import GameList from "../components/GameList/GameList";
import PageWrapperComponent from "../components/PageWrapperComponent/PageWrapperComponent";
import { latestGames } from "../services/gameServices";
import GameContext from "../store/gameContext";
import Loader from "../components/Loader/Loader";
import { getPageNumber } from "../utils/utils";

const LatestGamesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { games, handleSetGames, pageNumber, handleSetPageNumber } =
    useContext(GameContext);
  const paginationNumber = parseInt(getPageNumber("page"));
  handleSetPageNumber(paginationNumber ? paginationNumber : 1);

  useEffect(() => {
    setIsLoading(true);
    latestGames(pageNumber).then((response) => {
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

export default LatestGamesPage;
