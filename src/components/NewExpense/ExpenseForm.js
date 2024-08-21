import {useEffect, useReducer , useState } from "react";
import Button from "../UI/Button";

const titleReducer = (state, action) => {
  if (action.type === "INPUT_USER") {
    return { value: action.val, isValid: action.val !== "" };
  }
  return { value: "", isValid: "" };
};

const amountReducer = (state, action) => {
  if(action.type === 'INPUT_USER')
    return { value: action.val, isValid: (action.val !== "" && Number.isInteger(parseInt(action.val))) };

  return {value:'',isValid:false}
};

const dateReducer = (state, action) => {
  if(action.type === 'INPUT_USER')
    return { value: action.val, isValid: action.val !== "" };

  return {value:'',isValid:false}
};

const ExpenseForm = (props) => {

  const [validForm, setValidForm] = useState(false);

  const [titleState, dispatchTitle] = useReducer(titleReducer, {
    value: "",
    isValid: false,
  });

  const [amountState, dispatchAmount] = useReducer(amountReducer, {
    value: "",
    isValid: false,
  });

  const [dateState, dispatchDate] = useReducer(dateReducer, {
    value: "",
    isValid: false,
  });

  const {isValid:titleIsValid} = titleState;
  const {isValid:amountIsValid} = amountState;
  const {isValid:dateIsValid} = dateState;


  useEffect(() => {
    const timer = setTimeout(() => {
      setValidForm(
        titleState.isValid && amountState.isValid && dateState.isValid
      );
    }, 500);

    console.log('Effect IS Working')

    return () => {
      console.log("Cleanup");
      clearTimeout(timer);
    };
  }, [titleIsValid, amountIsValid, dateIsValid]);

  const handelTitle = (event) => {
    dispatchTitle({ type: "INPUT_USER", val: event.target.value });
  };

  const handelAmount = (event) => {
    dispatchAmount({ type: "INPUT_USER", val: event.target.value });
  };

  const handelDate = (event) => {
    dispatchDate({ type: "INPUT_USER", val: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleState.value,
      amount: amountState.value,
      date: new Date(dateState.value),
    };
    props.onSaveExpenseData(expenseData);
    props.showToast();

    dispatchTitle({});
    dispatchAmount({});
    dispatchDate({});
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="max-w-2xl bg-gray-800 mx-auto p-3 rounded-lg"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={handelTitle}
            value={titleState.value}
            type="text"
            name="title"
            id="title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Title"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={handelAmount}
              value={amountState.value}
              type="text"
              name="amount"
              id="amount"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Amount"
              min="0.01"
              step="0.01"
              required
            />
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={handelDate}
              value={dateState.value}
              type="date"
              name="date"
              id="date"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Date"
              min="2010-01-01"
              required
            />
          </div>
        </div>

        <Button type="text" validForm={validForm} onClick={submitHandler}>
          Add Expense
        </Button>
      </form>
    </>
  );
};

export default ExpenseForm;
