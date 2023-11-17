const { default: axios } = require("axios");
const API_KEY = "166815e958f742e08d79303565ed807f";

const extractGames = async (result) => {
  const resultToSend = [];
  result.forEach((game) => {
    //FOR ALL GAMES CREATE AN OBJECT, ADD IT TO ARRAY
    const images = []; //GET ALL IMAGES OF THIS GAME
    game.short_screenshots.forEach((img) => {
      images.push(img.image);
    });
    const gamePlatforms = []; //GET ALL PLATFORMS FOR THIS GAME
    //CHECKING IF THERE AREA ANY PLATFORMS
    if (game.platforms !== null) {
      game.platforms.forEach((platform) =>
        gamePlatforms.push(platform.platform.name)
      );
    }
    const releaseDate = new Date(game.released); //GETTING THE CORRECT DATE FORMAT
    //CREATING A NEW GAME OBJECT
    const newGame = {
      name: game.name,
      release: releaseDate,
      rating: game.rating,
      ratingCount: game.ratings_count,
      genres: game.genres,
      ratings: game.ratings[0],
      platforms: gamePlatforms,
      images: images,
    };
    resultToSend.push(newGame); //ADDING IT TO THE ARRAY
  });
  return resultToSend;
};

const apiCall = async (url) => {
  const apiResponse = await axios.get(url);
  const result = apiResponse.data.results;
  return result;
};

// CHECH FOR EXISTANCE OF RETRIEVED GAMES AND RETRIEVE GAMES IF ITS NULL
const retrieveGames = async (retrievedGames, pageNumber) => {
  const url =
    "https://api.rawg.io/api/games?key=" + API_KEY + "&page=" + pageNumber;
  const result = await gameServices.apiCall(url); // GETTING THE RAW DATA FROM API
  retrievedGames = await gameServices.extractGames(result); // EXTRACTING THE GAMES FROM RAW DATA
  return retrievedGames;
};

//SEARCH GAMES
const searchGames = async (url) => {
  try {
    const response = await axios.get(url); // API CALL

    if (response.data.count === 0) {
      return "No games found!"; // NOTHING FOUND
    } else {
      const result = response.data.results; //SOMETHING FOUND
      return await extractGames(result); // EXTRACTING THE FOUND GAMES FROM RAW DATA
    }
  } catch (error) {
    console.log(error);
    return "Error: " + error;
  }
};

//FILTER FOR MOST POPULAR GAMES
const getPopularGames = (games) => {
  const popularGames = games;
  return popularGames.sort((game1, game2) =>
    game1.ratingCount <= game2.ratingCount ? 1 : -1
  );
};

// FILTER FOR THE LATEST GAMES
const getLatestGames = (games) => {
  const latestGames = games;
  return latestGames.sort((game1, game2) => game1.release - game2.release);
};

//FILTER FOR THE TOP RATED GAMES
const getTopRatedGames = (games) => {
  const topRatedGames = games;
  return topRatedGames.sort((game1, game2) =>
    game1.rating < game2.rating ? 1 : -1
  );
};

const gameServices = {
  extractGames,
  apiCall,
  searchGames,
  getLatestGames,
  getTopRatedGames,
  getPopularGames,
  retrieveGames,
};

module.exports = gameServices;
