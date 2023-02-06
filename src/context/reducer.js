import { createStore } from "redux";
// const localstorage = ;
const localData = JSON.parse(localStorage.getItem("employeeData"));

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "getEmployees":
      return {
        ...state,
        data: [...state.data, action.data],
      };
    default:
      return state;
  }
};
export const store = createStore(reducer);
