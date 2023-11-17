import React from "react";
import { Routes, Route } from "react-router-dom";

import GameListPage from "./pages/GameListPage";
import TopGamesPage from "./pages/TopGamesPage";
import LatestGamesPage from "./pages/LatestGamesPage";
import SearchedGamesPage from "./pages/SearchedGamesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GameListPage />} />
      <Route path="/top-rated-games" element={<TopGamesPage />} />
      <Route path="/latest-games" element={<LatestGamesPage />} />
      <Route path="/search-games" element={<SearchedGamesPage />} />
    </Routes>
  );
}

export default App;
