import React from "react";
import Logo from "./split_logo.png";
import "./styles/welcomeScreen.css";

export const WelcomeScreen = () => {
  return (
    <div>
      <div className="welcomeMsg">
        <img className="logo" src={Logo} alt="logo"></img>
        <h1>Welcome to Splitwise!</h1>
        <h6 className="">What would you like to do first?</h6>
      </div>
      <div>
        <button>Add your Apartment</button>
        <button>Add a group trip</button>
        <button>Skip setup for now</button>
      </div>
      <div>
        <p>Looking for a fairness calculators?</p>
        <a href="https://secure.splitwise.com/calculators"> Click here</a>
      </div>
    </div>
  );
};
