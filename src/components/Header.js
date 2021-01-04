import React from 'react'

import '../styles/Header.scss';
import NavBar from './NavBar'
import HeaderContent from './HeaderContent'

const Header = ({ page }) => {





    return (
        <React.Fragment>
            <NavBar page={page} />
            <section className="header">
                <HeaderContent page={page}></HeaderContent>
            </section>
        </React.Fragment>
    );
}

export default Header;
