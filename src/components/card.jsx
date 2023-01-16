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
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const amountPaid = (paidUser, expense = 0, frnd) => {
    let amount = 0;
    let message;
    if (paidUser === "you") {
      amount = expense / 2;
      message = "you lent " + amount;
    } else if (paidUser === "others") {
      amount = expense / 2;
      message = frnd + " lent you " + amount;
    }
    return message;
  };
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
                      <td>{date}</td>
                      <td>
                        <h5>{item.description}</h5>
                      </td>
                      <td>
                        <h5>
                          {item.select} paid
                          {item.value}
                        </h5>
                      </td>
                      <td>
                        <h5>
                          {amountPaid(item.select, item.value, item.frnd)}
                        </h5>
                      </td>
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
