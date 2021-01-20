import "../styles/FeaturedProject.scss";
// import NatureByHolly from "../images/naturebyholly.jpg";
import ToDoImg from "../images/todolist.png";
import Project from "./Project";

import Button from "./Button";

const FeaturedProject = () => {
  return (
    <section className="featured-project">
      <div className="featured-project-container">
        <div className="featured-project__title">Featured Project</div>
        <Project
          image={ToDoImg}
          title="Full Stack ToDo App"
          btnText="See the site"
          link="https://todolist1233.herokuapp.com/"
          external={true}
        >
          <div className="project__description__container">
            <span className="project__description__container--1">
              <span>
                A simple todo list app that I have created to solidify and
                demonstrate my knowledge of many technologies that I have
                learnt.
              </span>
              <br />
              <span>Technologies used in this project are as follows:</span>
            </span>
            <ul className="project__description__list">
              <li>React</li>
              <li>Redux for state management</li>
              <li>MongoDB for the database (using mongoose to connect)</li>
              <li>Node/express for the backend API server</li>
              <li>Authorization using google</li>
              <li>Sass for the CSS</li>
            </ul>
            <span>
              All code for this project can be found on my github page.
            </span>
          </div>
        </Project>
      </div>
    </section>
  );
};

export default FeaturedProject;
