import React from "react";
import splitLogo from './split_logo.png';

export const Nav = () => {
    return (
        <>
        <nav>
            <a className="brandLogo" href="#"><img src="splitLogo" alt="Logo" /></a>
            <ul>
                <li><a href="#">Login</a></li>
                <li><a href="#">SignUp</a></li>
            </ul>
        </nav>
        </>
    );
}