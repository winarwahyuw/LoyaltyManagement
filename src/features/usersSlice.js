import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userUpdated(state, action) {
      return action.payload
    },
  },
});

export const { userUpdated } = usersSlice.actions;

export default usersSlice.reducer;