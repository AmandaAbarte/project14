import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employeeSlice.slice";
import modalSlice from "./modalSlice.slice";
import dropdownSlice from "./dropdownSlice.slice";

export const store = configureStore({
  reducer: {
    employee: employeesReducer,
    modal: modalSlice,
    dropdown: dropdownSlice,
  },
});
