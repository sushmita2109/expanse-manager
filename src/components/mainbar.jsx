import React, { useState } from "react";
import Stick from "./stick.png";
import { Modal } from "./modal";
import "./styles/mainbar.css";

export const Mainbar = () => {
  const [show, setShow] = useState(false);
  const [inputDesc, setInputDesc] = useState("");
  const [inputValue, setInputValue] = useState("");

  const updateBoth = (desc, value) => {
    setInputDesc(desc);
    setInputValue(value);
  };
  return (
    <div className="mainbar">
      <div className="allexpense">
        <h2>All expenses</h2>
        <button onClick={() => setShow(true)}>Add an expense</button>
        <Modal onDesc={updateBoth} onClose={() => setShow(false)} show={show} />
        <button>settle up</button>
      </div>
      <div className="stickfig">
        <img src={Stick} alt="stick" />
        <h5>To add a new expense, click the orange “Add an expense” button.</h5>
        <h3>
          {inputDesc}
          {inputValue}
        </h3>
      </div>
    </div>
  );
};
