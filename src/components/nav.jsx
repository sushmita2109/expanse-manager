import React from "react";
import Logo from "./split_logo.png";
import { Link } from "react-router-dom";
import "./styles/nav.css";

export const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <Link className="brand" to="/">
          <img className="brandLogo" src={Logo} alt="Logo" />
          <h3 className="brandName">Splitwise</h3>
        </Link>
        <ul className="listLink">
          <li className="secondaryLink">
            <Link className="secLink" to="/login">
              Login
            </Link>
          </li>
          <li className="primaryLink">
            <Link className="priLink" to="/signup">
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
