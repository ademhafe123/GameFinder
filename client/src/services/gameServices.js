import axios from "axios";

export const popularGames = () => {
  return axios.get("http://localhost:7000/");
};

export const searchGames = (gameName) => {
  return axios.post("http://localhost:7000/search-games", { gameName });
};

export const topRatedGames = () => {
  return axios.get("http://localhost:7000/top-rated-games");
};

export const latestGames = () => {
  return axios.get("http://localhost:7000/latest-games");
};
