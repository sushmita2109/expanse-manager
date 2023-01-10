import React from "react";
import "./styles/card.css";
import Stick from "./stick.png";
import { useState } from "react";

/**
 * 
 * descp = [{
 * id: "",
    des: "",
    val: "",
 * }]
 */
export const Card = ({ expenseList, deleteItem, show }) => {
  let visible = expenseList.length > 0;

  return (
    <div className="card">
      {!visible && (
        <div className="stickfig">
          <img src={Stick} alt="stick" />
          <h5>
            To add a new expense, click the orange “Add an expense” button.
          </h5>
        </div>
      )}
      <div className="box">
        <div>
          {visible && (
            <table>
              <thead>
                <tr>
                  <th colspan="2">Spendings</th>
                </tr>
              </thead>
              <tbody>
                {expenseList.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{item.description}</td>
                      <td>{item.value}</td>
                      <td>
                        <button onClick={() => deleteItem(item)}>Remove</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
