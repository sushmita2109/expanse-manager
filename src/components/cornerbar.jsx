import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./styles/sidebar.css";

export const Cornerbar = () => {
  return (
    <div>
      <div className="invite">
        <h3 className="frndTxt">Invite friends</h3>
        <form className="formTxt">
          <input type="text" placeholder="Enter an email address" />
          <button>Send Invites</button>
        </form>
      </div>
      <div>
        <button className="socialBtn">
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faFacebook}
          ></FontAwesomeIcon>
          Share
        </button>
        <button className="socialBtn">
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faTwitter}
          ></FontAwesomeIcon>
          Tweet
        </button>
      </div>
    </div>
  );
};
