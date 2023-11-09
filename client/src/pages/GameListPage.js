import { useContext, useEffect } from "react";
import GameList from "../components/GameList/GameList";
import GameContext from "../store/gameContext";
import { popularGames } from "../services/gameServices";
import PageWrapperComponent from "../components/PageWrapperComponent/PageWrapperComponent";

const GameListPage = () => {
  const { games, handleSetGames } = useContext(GameContext);

  useEffect(() => {
    popularGames().then((response) => {
      handleSetGames(response.data);
    });
  }, [handleSetGames]);

  return (
    <PageWrapperComponent>
      <GameList games={games} />
    </PageWrapperComponent>
  );
};

export default GameListPage;
