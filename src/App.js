import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import TodoList from "./components/Todos/TodoList";
import Todo from "./components/Todos/Todo";
import { useState } from "react";
const DUMMY_EXPENCES = [
  {
    id: "e1",
    title: "Porshe",
    amount: 269.63,
    date: new Date(2020, 7, 12),
  },
  {
    id: "e2",
    title: "Saipa",
    amount: 120.63,
    date: new Date(2018, 7, 12),
  },
  {
    id: "e3",
    title: "Maclaren",
    amount: 413.63,
    date: new Date(2024, 7, 12),
  },
  {
    id: "e5",
    title: "Benz",
    amount: 322.63,
    date: new Date(2022, 7, 12),
  },
  {
    id: "e6",
    title: "BMW",
    amount: 764.12,
    date: new Date(2025, 1, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENCES);

  const addExpenseHandler = (expense) => {
    console.log(expenses);
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="App text-2xl font-bold">
      <h1 className="font-bold text-purple">Hello world</h1>
      <p>lorem</p>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
