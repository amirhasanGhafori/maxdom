import React from "react";
import Cart from "../UI/Cart";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {

  return (
    <Cart className="bg-gray-900 p-3 flex items-center justify-between max-w-2xl rounded-lg gap-2 m-2 mx-auto">
      <div className="flex gap-8 items-center">
        <ExpenseDate date={props.date} />
        <h2 className="text-white">{props.title}</h2>
      </div>
      <button className="p-2 rounded-lg bg-green-500">${props.amount}</button>
    </Cart>
  );
}

export default ExpenseItem;
