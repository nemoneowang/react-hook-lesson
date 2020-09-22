import React, { createContext, useReducer } from "react";

const TestContext = createContext();

const initialState = {
  name: "Jim",
  age: 0,
};

const reducerAction = (state, action) => {
  switch (action.type) {
    case "addAge":
      return {
        ...state,
        age: state.age + 1,
      };
    case "changeName":
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

function TestReducer(props) {
  const [state, dispatch] = useReducer(reducerAction, initialState);
return <TestContext.Provider value={{state,dispatch}}>{props.children}</TestContext.Provider>;
}

export { TestReducer, TestContext };
