import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GamesNavbar from "../GamesNavbar/GamesNavbar";

import "./PageWrapper.css";

const PageWrapperComponent = ({ hideNav, children }) => {
  return (
    <React.Fragment>
      <Header />

      <section id="game-list">
        {!hideNav && <GamesNavbar />}
        {children}
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default PageWrapperComponent;
