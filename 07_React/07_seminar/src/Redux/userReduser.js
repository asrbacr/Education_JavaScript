import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
};
const usersSlice = createReducer({
  name: "users",
  initialState,
  reducers: {
    fetchUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } =
  usersSlice.actions;

export default usersSlice.reducer;