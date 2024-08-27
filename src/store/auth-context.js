import React, { useEffect, useReducer, useState } from "react";

const AuthContext = React.createContext({
  id: null,
});

const EmailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  return { value: "", isValid: false };
};

const passReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.length > 6 };
  }
  return {value:'',isValid:false}
};

export const AuthContextProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const [emailState, dispatchEmail] = useReducer(EmailReducer, {
    value: "",
    isValid: "",
  });
  const [passState, dispatchPass] = useReducer(passReducer, {
    value: "",
    isValid: false,
  });

  useEffect(()=>{
    if(localStorage.key('loggedIn')){
        setIsLogged(true);
    }
    setIsValidForm(emailState.isValid && passState.isValid);
  },[emailState.value,passState.value])

  const emailHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    console.log(emailState);
  };
  const handelPass = (event) => {
    dispatchPass({ type: "USER_INPUT", val: event.target.value });
  };

  const formHandler = (event)=>{
    event.preventDefault();
    localStorage.setItem('loggedIn',true);
    setIsLogged(true);
  }

  const logoutUser = (event)=>{
    localStorage.removeItem('loggedIn');
    setIsLogged(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged: isLogged,
        setIsLogged: setIsLogged,
        emailHandler: emailHandler,
        emailState: emailState,
        passHandler: handelPass,
        passState: passState,
        isValidForm:isValidForm,
        formHandler:formHandler,
        logoutUser:logoutUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
