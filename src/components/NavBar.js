import "../styles/NavBar.scss";
import { Link } from "react-router-dom";
import { HashLink, HaskLink } from "react-router-hash-link";
import React, { useEffect } from "react";
// import ReactDOM from 'react-dom'

const NavBar = ({ page }) => {
  //todo- be able to set active page

  const addActive = (item) => {
    // console.log(typeof item.innerHTML.toLowerCase());
    // console.log(typeof page.toLowerCase());
    // console.log(item.innerHTML.toLowerCase() === page.toLowerCase());

    if (item.innerHTML.toLowerCase() === page.toLowerCase()) {
      item.classList.add("nav__item__active");
      //   console.log("added");
    }
  };

  useEffect(() => {
    const items = window.document.querySelectorAll(".nav__item");
    // console.log(items);
    items.forEach((item) => addActive(item));
  }, [page]);

  return (
    <div className="nav">
      <Link className="nav__name" to="/">
        {" "}
        Ryan Stewart
      </Link>

      <ul className="nav__items">
        <Link to="/projects">
          <li className="nav__item nav__item--1">Projects</li>
        </Link>
        {/* <Link to="/about"><li className="nav__item nav__item--2">About</li></Link> */}
        <HashLink to="/#contact">
          <li className="nav__item nav__item--3">Contact</li>
        </HashLink>
        <Link to="/resume">
          <li className="nav__item nav__item--4">Resume</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
