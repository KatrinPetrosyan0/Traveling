import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navigation">
        <ul className="fixed-navigation navigation-top top-position">
            <li className="move">
                <Link to='/about'><span className="effect-navigation none">ABOUT</span></Link>
            </li>
        </ul>
        <ul className="fixed-navigation navigation-left left-position">
            <li className="move">
            <Link to='/services'><span className="effect-navigation none">SERVICES</span></Link>
            </li>
        </ul>
        <ul className="fixed-navigation navigation-right right-position">
            <li className="move">
            <Link to='/contact'><span className="effect-navigation none">CONTACT</span></Link>

            </li>
        </ul>
        <ul className="fixed-navigation navigation-bottom bottom-position">
            <li className="move">
            <Link to='/get-a-quote'><span className="effect-navigation none">GET A QUOTE</span></Link>
    
            </li>
        </ul>
    </nav>
    
    )
}

export default NavBar;