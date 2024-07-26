import React,{useState} from "react";
import Cart from "../UI/Cart";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {

  const [title,setTitle] = useState(props.title);
  let gen = "";

  const eventHandler = () =>{
    setTitle("Updated!!!!" + gen)
  }

  return (
    <Cart className="bg-gray-900 p-3 flex items-center justify-between max-w-2xl rounded-lg gap-2 m-2 mx-auto">
      <div className="flex gap-8 items-center">
        <ExpenseDate date={props.date} />
        <h2 className="text-white">{title}</h2>
      </div>
      <button onClick={eventHandler} className="p-2 rounded-lg bg-green-500">${props.amount}</button>
    </Cart>
  );
}

export default ExpenseItem;
