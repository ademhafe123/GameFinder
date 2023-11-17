const express = require("express");
const gamesRouter = express.Router();

const gamesController = require("../Controllers/gamesController");

gamesRouter.post("/", gamesController.popularGames);

gamesRouter.post("/search-games", gamesController.searchGames);

gamesRouter.post("/latest-games", gamesController.latestGames);

gamesRouter.post("/top-rated-games", gamesController.topRatedGames);

module.exports = gamesRouter;
