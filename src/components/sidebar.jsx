import React from "react";
import Logo from "./split_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./styles/sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="headimage">
        <img className="image" src={Logo} alt="logo" />
        <h3>Dashboard</h3>
      </div>
      <div className="recent">
        <FontAwesomeIcon className="flagIcon" icon={faFlag}></FontAwesomeIcon>
        <h3>Recent activity</h3>
      </div>
      <div className="expense">
        <div className="expensebars">
          <FontAwesomeIcon className="flagIcon" icon={faBars}></FontAwesomeIcon>
          <h3>All Expanses</h3>
        </div>
        <div className="group">
          Groups
          <a className="link" href="#">
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            add
          </a>
        </div>
        <div className="group">
          Friends
          <a className="link" href="#">
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            add
          </a>
        </div>
      </div>
    </div>
  );
};
