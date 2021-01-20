import "../styles/Project.scss";
import React from "react";

import Button from "./Button";

const Project = ({ image, title, children, btnText, link, external }) => {
  return (
    <div className="project">
      <div className="project__img-container">
        <a className="project__img-link" href="">
          <img
            src={image}
            alt="Nature by Holly example picture"
            className="project__img"
          />
        </a>
      </div>
      <div className="project__text">
        <a href="#" className="project__title">
          {title}
        </a>
        <div className="project__description">{children}</div>
        <Button
          color="red"
          exClass="project__btn"
          to={link}
          external={external}
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default Project;
