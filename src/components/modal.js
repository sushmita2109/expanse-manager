import React, { useRef, useState } from "react";
import "./styles/modal.css";

export const Modal = (props) => {
  const inputRef = useRef(null);
  const valueRef = useRef(null);
  if (!props.show) {
    return null;
  }

  // const handleClick = () => {
  //     setInputValue(inputRef.current.value);
  //   };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Add Expense</h4>
        </div>
        <div className="modal-body">
          <input
            ref={inputRef}
            type="text"
            id="message"
            name="message"
            placeholder="enter description"
          />
          <input
            ref={valueRef}
            type="number"
            id="amount"
            name="amount"
            placeholder="enter amount"
          />
          <label htmlFor="payer-select">Paid by</label>
          <select name="payer" id="payer-select">
            <option value="">--Please choose an option--</option>
            <option value="you">You</option>
            <option value="others">Other</option>
          </select>
          <p>divide equally between</p>
          <input
            type="text"
            id="friendname"
            name="frndname"
            placeholder="enter friends name"
          />
        </div>
        <div className="modal-footer">
          <button
            onClick={() => {
              props.onDesc(inputRef.current.value, valueRef.current.value);
              setTimeout(() => {
                props.onClose();
              }, 1000);
            }}
          >
            Save
          </button>
          <button onClick={props.onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
