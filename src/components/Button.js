import '../styles/Button.scss'
import { Link } from 'react-router-dom'

const Button = ({ color, children, exClass, type, to }) => {

    const btnColor = () => {

        if (color !== null) {
            return `btn--${color}`

        }

        else return ""

    }
    return (
        <Link to={to} className={`btn ${btnColor()} ${exClass}`} type={type}>
            {children}
        </Link>
    );
}

export default Button;
