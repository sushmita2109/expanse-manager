import React from "react";
import Logo from "./split_logo.png";

export const WelcomeScreen = () => {
  return (
    <div>
      <div className="">
        <img src={Logo} alt="logo"></img>
        <h1>Welcome to Splitwise!</h1>
        <h6>What would you like to do first?</h6>
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
