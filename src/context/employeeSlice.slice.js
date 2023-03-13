import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    {
      firstname: "amanda",
      lastname: "laura",
      dateofbirth: "10-12-2000",
      startdate: "12-12-2012",
      street: "123",
      city: "sgdsdg",
      state: "arizona",
      zipcode: "1234",
      department: "legal",
    },
    {
      firstname: "jane",
      lastname: "doe",
      dateofbirth: "10-12-2000",
      startdate: "12-12-2012",
      street: "123",
      city: "sgdsdg",
      state: "arizona",
      zipcode: "1234",
      department: "legal",
    },
  ],
};
export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, { payload }) => {
      state.employees.push(payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
