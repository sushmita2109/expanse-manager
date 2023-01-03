import React from "react";
import Logo from "./split_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./styles/signup.css";
import { useState } from "react";

export const SignUp = () => {
  const [isshow, setIsshow] = useState(false);
  return (
    <div className="container">
      <Link to="/">
        <img className="logo" src={Logo} alt="logo" />
      </Link>
      <form>
        <div className="headText">INTRODUCE YOURSELF</div>
        <div className="subText">Hi there! My name is</div>
        <input
          className="inputText"
          type="text"
          onChange={(event) => {
            if (event.target.value) setIsshow(true);
          }}
        ></input>
        {isshow && (
          <div className="flex">
            <label className="emailText">Here’s my email address:</label>
            <input className="emailInput" type="email"></input>
            <label className="emailText">And here’s my password:</label>
            <input className="emailInput" type="password"></input>
            <label className="textLabel">
              <input type="checkbox"></input>
              <span>I'm not a robot</span>
            </label>
          </div>
        )}

        <div className="buttonBlock">
          <button className="signupBtn">Sign me up!</button>
          <div className="divide">or</div>
          <button className="googleBtn">
            <FontAwesomeIcon
              style={{ color: "black" }}
              icon={faGoogle}
            ></FontAwesomeIcon>
            <span className="googleText"> Sign in with Google</span>
          </button>
        </div>
      </form>

      <a href="https://www.splitwise.com/terms">
        By signing up, you accept the Splitwise Terms of Service.
      </a>
    </div>
  );
};
