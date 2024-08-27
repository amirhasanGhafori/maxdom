import { useContext } from "react";
import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import Notify from "./components/UI/Notify";
import AuthContext from "./store/auth-context";
import LoginUser from "./components/Auth/LoginUser";
import Header from "./components/UI/Header";

function App() {
  const auth = useContext(AuthContext);
  console.log(auth);
  return (
    <div className="App text-2xl font-bold">
      <Header/>
      {!auth.isLogged && <LoginUser />}
      {auth.isLogged && (
        <div className="App text-2xl font-bold">
          <Notify />
          <NewExpense />
          <Expense />
        </div>
      )}
    </div>
  );
}

export default App;
