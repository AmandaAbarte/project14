import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employeeSlice.slice";
import modalSlice from "./modalSlice.slice";

export const store = configureStore({
  reducer: {
    employee: employeesReducer,
    modal: modalSlice,
  },
});
