import axios from "axios";

export const popularGames = (pageNumber) => {
  return axios.post("http://localhost:7000/", { pageNumber });
};

export const searchGames = (gameName) => {
  return axios.post("http://localhost:7000/search-games", { gameName });
};

export const topRatedGames = (pageNumber) => {
  return axios.post("http://localhost:7000/top-rated-games", { pageNumber });
};

export const latestGames = (pageNumber) => {
  return axios.post("http://localhost:7000/latest-games", { pageNumber });
};
