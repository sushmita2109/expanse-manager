import React, { useState } from "react";

import { Modal } from "./modal";
import { Card } from "./card";
import "./styles/mainbar.css";

export const Mainbar = () => {
  const [expenseList, setExpenseList] = useState([]);
  //   let expenseList = [];
  const [show, setShow] = useState(false);
  const deleteItem = (expense) => {
    const filteredList = expenseList.filter(
      (item) => item.description !== expense.description
    );
    setExpenseList(filteredList);
  };
  const deleteAllItems = () => {
    setExpenseList([]);
  };
  const updateBoth = (desc, value, frnd, select) => {
    console.log({ desc, value });
    expenseList.push({
      description: desc,
      value: value.toString(),
      frnd: frnd,
      select: select,
    });
    console.log({ expenseList });
  };
  return (
    <div className="mainbar">
      <div className="allexpense">
        <h2>All expenses</h2>
        <button className="signupBtn" onClick={() => setShow(true)}>
          Add an expense
        </button>
        <Modal onDesc={updateBoth} onClose={() => setShow(false)} show={show} />
        <button className="btn" onClick={deleteAllItems}>
          Settle up all
        </button>
      </div>

      <Card expenseList={expenseList} deleteItem={deleteItem} />
    </div>
  );
};
