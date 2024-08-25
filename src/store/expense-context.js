import React, { useState } from "react";

const ExpenseContext = React.createContext({
  isLoggedIn: false,
});

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

export const ExpenseContentProvider = (props) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENCES);
  const [status, setStatus] = useState(false);

  const closeNotify = (e) => {
    setStatus(false);
  };
  const handelToast = () => {
    setStatus(true);
  };

  const updatedExpense = () => {
    console.log("updated successfully");
  };
  const addNewLog = () => {
    console.log("Log Inserted Successfully");
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <ExpenseContext.Provider
      value={{
        isLoggedIn: props.isLoggedIn,
        onExpense: addExpenseHandler,
        onToast: handelToast,
        onCloseNotify: closeNotify,
        status: status,
        addNewLog: addNewLog,
        updatedExpense: updatedExpense,
        expenses:expenses
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
