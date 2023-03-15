import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    {
      firstname: "John",
      lastname: "Doe",
      dateofbirth: "10-12-2000",
      startdate: "12-12-2012",
      street: "123 lane",
      city: "Paris",
      state: "arizona",
      zipcode: "1234",
      department: "Legal",
    },
    {
      firstname: "Jane",
      lastname: "doe",
      dateofbirth: "10-12-2000",
      startdate: "12-12-2012",
      street: "46 blabla street",
      city: "NewYork",
      state: "arizona",
      zipcode: "123456",
      department: "IT",
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
