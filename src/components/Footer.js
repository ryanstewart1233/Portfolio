import '../styles/Footer.scss'
import { ImFacebook2, ImInstagram, ImLinkedin, ImGithub } from "react-icons/im";
import { IconContext } from "react-icons";


const Footer = () => {
    return (

        <section className="footer">
            <IconContext.Provider value={{ className: "footer__icon" }}>

                <div className="footer__icon__container">
                    <a href="https://www.linkedin.com/in/ryan-stewart-80a975146/"><ImLinkedin /></a>
                    <a href="https://www.facebook.com/ryan.stewart.77398/"><ImFacebook2 /></a>
                    <a href="https://www.instagram.com/ryan.stewart.1233/"><ImInstagram /></a>
                    <a href="https://github.com/ryanstewart1233"><ImGithub /></a>
                </div>


            </IconContext.Provider>

            <div className="footer__copyright">
                Ryan Stewart &copy; 2020. All Right Reserved
            </div>

        </section>
    );
}

export default Footer;
