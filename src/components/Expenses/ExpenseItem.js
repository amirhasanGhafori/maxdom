import React,{Component} from "react";
import Cart from "../UI/Cart";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


class ExpenseItem extends Component {
  constructor(){
    super();
  }
  render(){
    return <Cart className="bg-gray-900 p-3 flex items-center justify-between max-w-2xl rounded-lg gap-2 m-2 mx-auto">
      <div className="flex gap-8 items-center">
        <ExpenseDate date={this.props.date} />
        <h2 className="text-white">{this.props.title}</h2>
      </div>
      <button className="p-2 rounded-lg bg-green-500">${this.props.amount}</button>
    </Cart>
  }
}


export default ExpenseItem;
