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
                  A simple to do list app that I have created to solidify and
                  demonstrate my knowledge of many technologies that I have
                  learnt.
                </span>
                <br />
              </span>
              <span>
                <span>Technologies used in this project are as follows:</span>
                <ul className="project__description__list">
                  <li>React</li>
                  <li>Redux for state management</li>
                  <li>MongoDB for the database (using mongoose to connect)</li>
                  <li>Node/express for the backend API server</li>
                  <li>Authorization using google</li>
                  <li>Sass for the CSS</li>
                </ul>
              </span>

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
            Here is a basic website that I have created for my partner who runs
            her own Etsy business. This was the first website I created after
            learning vanilla css where as before I only had been using
            frameworks. Since then I have found web development much more
            enjoyable without the restrictions that some frameworks bring.
            <br />
            <br />
            This design was the first draft and I am working with her to create
            a version for publication.
          </Project>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FrontPage;
