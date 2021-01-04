
// -- MY IMPORTS -- //

import Header from '../components/Header'
import FeaturedProject from '../components/FeaturedProject'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const FrontPage = () => {
    return (


        <div className="landing-page">
            <Header page="main" />
            <FeaturedProject />
            <Skills />
            <Contact />
            <Footer />
        </div>


    );
}

export default FrontPage;
