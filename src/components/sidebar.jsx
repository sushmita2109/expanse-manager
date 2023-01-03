import React from "react";
import Logo from "./split_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./styles/sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="headimage">
        <img className="image" src={Logo} alt="" />
        <h3>Dashboard</h3>
      </div>
      <div className="recent">
        <FontAwesomeIcon className="flagIcon" icon={faFlag}></FontAwesomeIcon>
        <h3>Recent activity</h3>
      </div>
      <div className="expense">
        <div className="expensebars">
          <FontAwesomeIcon
            className="flag Icon"
            icon={faBars}
          ></FontAwesomeIcon>
          <h3>All Expanses</h3>
        </div>
        <div className="group">
          Groups
          <a href="#">
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            "Add"
          </a>
        </div>
        <div className="friends">
          Friends
          <a href="#">
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            "add"
          </a>
        </div>
      </div>
      <div>
        <h3>Invite friends</h3>
        <form>
          <input type="text" />
          <button>Send Invites</button>
        </form>
      </div>
      <div>
        <button>
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          Share
        </button>
        <button>
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          Tweet
        </button>
      </div>
    </div>
  );
};
