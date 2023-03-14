import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dropdowns: {},
};
export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    updateDropdown: (state, { payload }) => {
      return {
        ...state,
        dropdowns: { ...state.dropdowns, [payload.key]: payload.value },
      };
    },
  },
});

export const { updateDropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;
