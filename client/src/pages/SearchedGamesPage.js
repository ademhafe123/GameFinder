import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import GameContext from "../store/gameContext";
import { searchGames } from "../services/gameServices";
import { getParams } from "../utils/utils";
import "./Pages.css";

import PageWrapperComponent from "../components/PageWrapperComponent/PageWrapperComponent";
import GameList from "../components/GameList/GameList";

const SearchedGamesPage = () => {
  const { games, handleSetGames } = useContext(GameContext);
  const name = getParams("name");
  const navigate = useNavigate();

  useEffect(() => {
    searchGames(name).then((response) => {
      handleSetGames(response.data);
    });
  }, [name, handleSetGames]);

  const handleGoBack = () => navigate("/");

  return (
    <PageWrapperComponent hideNav={true}>
      <h1 className="search-title">"{name}"</h1>
      <h1 className="go-back" onClick={handleGoBack}>
        BACK
      </h1>
      <GameList games={games} />
    </PageWrapperComponent>
  );
};

export default SearchedGamesPage;
