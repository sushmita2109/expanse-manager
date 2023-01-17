import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlaneDeparture,
  faHeart,
  faAsterisk,
} from "@fortawesome/free-solid-svg-icons";
import { faApple, faAndroid } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { ReactComponent as House } from "./house.svg";
import { ReactComponent as Plane } from "./aeroplane.svg";
import { ReactComponent as Heart } from "./heart.svg";
import { ReactComponent as Multiply } from "./multiply.svg";
import "./styles/homePage.css";

const messageList = [
  { id: "1", mess: " on trips.", image: <Plane /> },
  { id: "2", mess: " with housemates.", image: <House /> },
  { id: "3", mess: " with your partner.", image: <Heart /> },
  { id: "4", mess: " with anyone.", image: <Multiply /> },
];
// console.log(messageList[0].image)
export const HomePage = () => {
  const [message, setMessage] = useState([]);
  const clickPlaneDeparture = () => {
    setMessage(messageList[0]);
  };
  const clickHome = () => {
    setMessage(messageList[1]);
  };
  const clickHeart = () => {
    setMessage(messageList[2]);
  };
  const clickMul = () => {
    setMessage(messageList[3]);
  };
  return (
    <div className="homePage">
      <h1 className="headerText">
        Less stress when sharing expenses<strong>{message.mess}</strong>
      </h1>
      <div className="image">
        <div className="imgIcons">
          <FontAwesomeIcon
            className="iconImg"
            style={{ margin: "0.5rem 0.5rem" }}
            icon={faPlaneDeparture}
            onClick={() => clickPlaneDeparture()}
          />
          <FontAwesomeIcon
            className="iconImg"
            style={{ margin: "0.5rem 0.5rem" }}
            icon={faHome}
            onClick={() => clickHome()}
          />
          <FontAwesomeIcon
            className="iconImg"
            style={{ margin: "0.5rem 0.5rem" }}
            icon={faHeart}
            onClick={() => clickHeart()}
          />
          <FontAwesomeIcon
            className="iconImg"
            style={{ margin: "0.5rem 0.5rem" }}
            icon={faAsterisk}
            onClick={() => clickMul()}
          />
          {/* <House/> */}
        </div>
        <div className="big-img">{message.image}</div>
      </div>
      <p className="para">
        Keep track of your shared expenses and balances with housemates, trips,
        groups, friends, and family.
      </p>
      <small>
        Free for
        <a
          className="applelink"
          style={{ textDecoration: "none", color: "black" }}
          href="https://apps.apple.com/us/app/splitwise/id458023433"
        >
          <FontAwesomeIcon icon={faApple} />
          <span> iphone,</span>
        </a>
        <a
          className="androidlink"
          style={{ textDecoration: "none", color: "black" }}
          href="https://play.google.com/store/apps/details?id=com.Splitwise.SplitwiseMobile&pli=1"
        >
          <FontAwesomeIcon icon={faAndroid} />
          <span> Android, </span>
        </a>
        <span>and web.</span>
      </small>
    </div>
  );
};
