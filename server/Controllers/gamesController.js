const { default: axios } = require("axios");
const gameServices = require("../Services/gamesServices");

const API_KEY = "166815e958f742e08d79303565ed807f";
let retrievedGames = null;

// GET MOST POPULAR GAMES (DEFAULT FOR SHOWING)
const popularGames = async (req, res) => {
  retrievedGames = await gameServices.checkForRetrievedGames(retrievedGames); // CHECK IF THE RETRIEVED GAMES EXIST, IF NOT, RETRIEVE GAMES
  const popularGames = gameServices.getPopularGames(retrievedGames);
  res.send(popularGames);
};

// SEARCH FOR A SPECIFIC GAME
const searchGames = async (req, res) => {
  const gameName = req.body.gameName;
  const url =
    "https://api.rawg.io/api/games?key=" + API_KEY + "&search=" + gameName;
  const games = await gameServices.searchGames(url);

  res.send(games);
};

//  GET LATEST GAMES
const latestGames = async (req, res) => {
  retrievedGames = await gameServices.checkForRetrievedGames(retrievedGames); // CHECK IF THE RETRIEVED GAMES EXIST, IF NOT, RETRIEVE GAMES
  const latestGames = gameServices.getLatestGames(retrievedGames); // GET THE LATEST GAMES FROM PREVIOUSLY RETRIEVED GAMES
  res.send(latestGames);
};

// GET TOP RATED GAMES
const topRatedGames = async (req, res) => {
  retrievedGames = await gameServices.checkForRetrievedGames(retrievedGames); // CHECK IF THE RETRIEVED GAMES EXIST, IF NOT, RETRIEVE GAMES
  const topRatedGames = gameServices.getTopRatedGames(retrievedGames); // GET THE TOP RATED GAMES FROM RETRIEVED GAMES
  res.send(topRatedGames);
};

const gamesController = {
  popularGames,
  searchGames,
  latestGames,
  topRatedGames,
};

module.exports = gamesController;
