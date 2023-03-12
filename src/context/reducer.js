import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employeeSlice.slice";

export const store = configureStore({
  reducer: {
    employee: employeesReducer,
  },
});
