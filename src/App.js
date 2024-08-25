import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import Notify from "./components/UI/Notify";


function App() {
  return (
    <div className="App text-2xl font-bold">
      <Notify />
      <h1 className="font-bold text-purple">Hello world</h1>
      <p>lorem</p>
      <NewExpense />
      <Expense />
    </div>
  );
}

export default App;
