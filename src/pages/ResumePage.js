// -- MY IMPORTS -- //
import Footer from "../components/Footer";
import Header from "../components/Header";
import Resume from "../components/Resume";

const ResumePage = () => {
  return (
    <div className="projects-page">
      <Header page="resume" />
      <Resume />
      <Footer />
    </div>
  );
};

export default ResumePage;
