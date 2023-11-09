import { useContext, useEffect } from "react";
import GameList from "../components/GameList/GameList";
import GameContext from "../store/gameContext";
import { topRatedGames } from "../services/gameServices";
import PageWrapperComponent from "../components/PageWrapperComponent/PageWrapperComponent";

const TopGamesPage = () => {
  const { games, handleSetGames } = useContext(GameContext);

  useEffect(() => {
    topRatedGames().then((response) => {
      handleSetGames(response.data);
    });
  }, [handleSetGames]);

  return (
    <PageWrapperComponent>
      <GameList games={games} />
    </PageWrapperComponent>
  );
};

export default TopGamesPage;
