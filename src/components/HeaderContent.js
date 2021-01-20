import React from "react";

import "../styles/Header.scss";
import Button from "./Button";
import RyanImg from "../images/ryan-1.jpg";

const HeaderMain = ({ page }) => {
  const renderMain = () => {
    if (page === "main") {
      return (
        <div className="h-content">
          <div className="h-content__container">
            <div className="h-content__title h-content__title-1">
              Hi, I'm <span>Ryan</span>.
            </div>
            <div className="h-content__title h-content__title-2">
              A self taught web developer based in bournemouth. Currently
              looking for my first professional position.
            </div>
            <Button color="red" to="/projects">
              My Projects
            </Button>
          </div>
          <div className="h-content__img">
            <img src={RyanImg} alt="Ryan Stewart" />
          </div>
        </div>
      );
    }
  };

  const renderProjects = () => {
    if (page === "projects") {
      return (
        <div className="h-content__container h-content__container--centered ">
          <div className="h-content__title h-content__title-1">
            My Projects.
          </div>
          <div className="h-content__title h-content__title-2">
            Please take a look at a few of my projects I have created in the
            last few months. Have a look at my git hub for more!
          </div>

          <Button
            className="btn btn--red"
            to="https://github.com/ryanstewart1233"
            external={true}
            color="red"
          >
            Github
          </Button>
        </div>
      );
    }
  };

  const renderAbout = () => {
    if (page === "about") {
      return (
        <div className="h-content__container h-content__container--centered">
          <div className="h-content__title h-content__title-1">About me.</div>
          <div className="h-content__title h-content__title-2">
            Want to know a little bit more? read below.
          </div>
        </div>
      );
    }
  };

  const renderResume = () => {
    if (page === "resume") {
      return (
        <div className="h-content__container h-content__container--centered">
          <div className="h-content__title h-content__title-1">My Resume.</div>
          <div className="h-content__title h-content__title-2">
            Please click the link below to download.
          </div>

          <a
            className="btn btn--red minus-margin"
            href="./Ryan-CV.pdf"
            download
          >
            Download
          </a>
        </div>
      );
    }
  };

  return (
    <React.Fragment>
      {renderMain()}
      {renderProjects()}
      {renderAbout()}
      {renderResume()}
    </React.Fragment>
  );
};

export default HeaderMain;
