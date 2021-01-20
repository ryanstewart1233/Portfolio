import "../styles/Button.scss";
import { Link } from "react-router-dom";

const Button = ({ color, children, exClass, type, to, external }) => {
  const btnColor = () => {
    if (color !== null) {
      return `btn--${color}`;
    } else return "";
  };

  const openNewPage = () => {
    console.log(external);
    if (external === true) {
      return "_blank";
    } else return "_self";
  };

  return (
    <a
      href={to}
      className={`btn ${btnColor()} ${exClass}`}
      type={type}
      target={openNewPage()}
    >
      {children}
    </a>
  );
};

export default Button;
