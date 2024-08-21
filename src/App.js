import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import Notify from "./components/UI/Notify";
const DUMMY_EXPENCES = [
  {
    id: "e1",
    title: "Porshe",
    amount: 269.63,
    date: new Date(2022, 7, 12),
  },
  {
    id: "e2",
    title: "Saipa",
    amount: 120.63,
    date: new Date(2022, 7, 12),
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
    date: new Date(2024, 1, 12),
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

  const [status,setStatus] = useState(false);

    const closeNotify = (e)=>{
        setStatus(false);
    }
    const handelToast = ()=>{
        setStatus(true);
    }


  return (
    <div className="App text-2xl font-bold">
      <Notify status={status} onCloseNotify={closeNotify} />
      <h1 className="font-bold text-purple">Hello world</h1>
      <p>lorem</p>
      <NewExpense onHandelStatus={handelToast} onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
