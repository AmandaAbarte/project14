import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employeeSlice.slice";
import dropdownSlice from "./dropdownSlice.slice";

export const store = configureStore({
  reducer: {
    employee: employeesReducer,
    dropdown: dropdownSlice,
  },
});
