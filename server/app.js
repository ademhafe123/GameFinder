const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

const gamesRouter = require("./Routers/gamesRouter");

app.use("/", gamesRouter); //GETTING ALL THE GAMES

app.use("/search-games", gamesRouter); //GETTING SPECIFIC GAMES

app.use("/latest-games", gamesRouter);

app.use("/top-rated-games", gamesRouter);

app.listen("7000", () => {
  console.log(`Server is up and running on port 7000`);
});
