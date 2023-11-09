import { useContext, useEffect } from "react";
import GameList from "../components/GameList/GameList";
import GameContext from "../store/gameContext";
import { latestGames } from "../services/gameServices";
import PageWrapperComponent from "../components/PageWrapperComponent/PageWrapperComponent";

const LatestGamesPage = () => {
  const { games, handleSetGames } = useContext(GameContext);

  useEffect(() => {
    latestGames().then((response) => {
      handleSetGames(response.data);
    });
  }, [handleSetGames]);

  return (
    <PageWrapperComponent>
      <GameList games={games} />
    </PageWrapperComponent>
  );
};

export default LatestGamesPage;
