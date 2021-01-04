import { useEffect } from "react";

// -- MY IMPORTS -- //
import Footer from "../components/Footer";
import Header from "../components/Header";
import Resume from "../components/Resume";

const ResumePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="projects-page" id="resume__header">
      <Header page="resume" />
      <Resume />
      <Footer />
    </div>
  );
};

export default ResumePage;
