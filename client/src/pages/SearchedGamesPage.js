import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import GameContext from "../store/gameContext";
import { searchGames } from "../services/gameServices";
import { getName } from "../utils/utils";
import "./Pages.css";

import PageWrapperComponent from "../components/PageWrapperComponent/PageWrapperComponent";
import GameList from "../components/GameList/GameList";
import Loader from "../components/Loader/Loader";

const SearchedGamesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { games, handleSetGames } = useContext(GameContext);
  const name = getName("name");
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    searchGames(name).then((response) => {
      handleSetGames(response.data);
      setIsLoading(false);
    });
  }, [name, handleSetGames]);

  const handleGoBack = () => navigate("/");

  return (
    <PageWrapperComponent hideNav={true}>
      <h1 className="search-title">"{name}"</h1>
      <h1 className="go-back" onClick={handleGoBack}>
        BACK
      </h1>
      {isLoading ? <Loader /> : <GameList games={games} hideNextPage={true} />}
    </PageWrapperComponent>
  );
};

export default SearchedGamesPage;
