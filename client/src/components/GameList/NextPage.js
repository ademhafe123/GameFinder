import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import GameContext from "../../store/gameContext";
import "./NextPage.css";

const NextPage = () => {
  const { pageNumber, handleSetPageNumber } = useContext(GameContext);
  const navigate = useNavigate();

  const handleNextPage = () => {
    handleSetPageNumber(pageNumber + 1);
    navigate("?page=" + (pageNumber + 1));
    window.scrollTo(0, 0);
  };
  const handlePreviousPage = () => {
    handleSetPageNumber(pageNumber - 1);
    navigate("?page=" + (pageNumber - 1));
    window.scrollTo(0, 0);
  };
  return (
    <div className="move-page-container">
      {pageNumber > 1 && (
        <div className="move-page-btn" onClick={handlePreviousPage}>
          <i className="fa-solid fa-chevron-left move-page-icon"></i>
          <h2 className="move-page-text">PREVIOUS PAGE</h2>
        </div>
      )}
      <div className="move-page-btn" href="#header" onClick={handleNextPage}>
        <h2 className="move-page-text">NEXT PAGE</h2>
        <i className="fa-solid fa-chevron-right move-page-icon"></i>
      </div>
    </div>
  );
};

export default NextPage;
