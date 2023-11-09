import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GameContextProvider } from "./store/gameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GameContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GameContextProvider>
  </React.StrictMode>
);
