import React from "react";
import Logo from './split_logo.png';
import {Link} from 'react-router-dom';

export const Nav = () => {
    return (
        <>
        <nav>
            <a className="brandLogo" href="#"><img src={Logo} alt="Logo" /><h3>Splitwise</h3></a>
            <ul className="listLink">
                <li className="secondaryLink"><Link to='/login'>Login</Link></li>
                <li className="primaryLink"><Link to='/signup'>Signup</Link></li>
            </ul>
        </nav>
        </>
    );
}