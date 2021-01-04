// -- MY IMPORTS -- //
import Footer from "../components/Footer";
import Project from "../components/Project";
import Header from "../components/Header";

import NatureByHolly from "../images/naturebyholly.jpg";

import "../styles/ProjectsSection.scss";

const FrontPage = () => {
  return (
    <div className="projects-page">
      <Header page="projects" />
      <div className="projects-section">
        <div className="projects-container">
          <Project image={NatureByHolly} title="NatureByHolly Website">
            Holly runs her own online etsy business selling custom entomology
            products and vintage prints. Currently this page just acts as extra
            advertisement to her existing etsy business, but we intend to fully
            add an online shop
          </Project>
          <Project image={NatureByHolly} title="ToDoList">
            I created this todolist app to solidify my knowledge of react
            development.
          </Project>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FrontPage;
