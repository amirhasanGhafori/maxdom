import { useState } from "react";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      amount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      date: event.target.value,
    });
  };

  const submitHandler = event=>{
    event.preventDefault();
    const expenseData = {
        ...userInput,
        date:new Date(userInput.date)
    }
    props.onSaveExpenseData(expenseData);
    setUserInput({
      title:"",
      amount:"",
      date:""
    });
  }

  return (
    <>
      <form onSubmit={submitHandler} class="max-w-2xl bg-gray-800 mx-auto p-3 rounded-lg">
        <div class="relative z-0 w-full mb-5 group">
          <input
            onChange={titleChangeHandler}
            value={userInput.title}
            type="text"
            name="title"
            id="title"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Title"
            required
          />
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
            value={userInput.amount}
              onChange={amountChangeHandler}
              type="number"
              name="amount"
              id="amount"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Amount"
              min="0.01"
              step="0.01"
              required
            />
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <input
             value={userInput.date}
              onChange={dateChangeHandler}
              type="date"
              name="date"
              id="date"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Date"
              min="2010-01-01"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Expense
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
