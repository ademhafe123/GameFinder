const express = require("express");
const gamesRouter = express.Router();

const gamesController = require("../Controllers/gamesController");

gamesRouter.get("/", gamesController.popularGames);

gamesRouter.post("/search-games", gamesController.searchGames);

gamesRouter.get("/latest-games", gamesController.latestGames);

gamesRouter.get("/top-rated-games", gamesController.topRatedGames);

module.exports = gamesRouter;
