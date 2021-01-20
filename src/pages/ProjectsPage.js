// -- MY IMPORTS -- //
import Footer from "../components/Footer";
import Project from "../components/Project";
import Header from "../components/Header";

import NatureByHolly from "../images/naturebyholly.jpg";
import ToDoImg from "../images/todolist.png";

import "../styles/ProjectsSection.scss";

const FrontPage = () => {
  return (
    <div className="projects-page">
      <Header page="projects" />
      <div className="projects-section">
        <div className="projects-container">
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
          <Project
            image={NatureByHolly}
            title="NatureByHolly"
            btnText="See the site"
            link="https://ryanstewart1233.github.io/NatureByHolly.github.io/"
            external={true}
          >
            A very simple website that I created for my girlfriend who runs her
            own etsy business. This is the first draft of the site but I am
            currently in talks with her for a V2 as she is much more artistic
            than I am
          </Project>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FrontPage;
