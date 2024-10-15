import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// const url = "https://jsonplaceholder.typicode.com/users";
import url from "../data/users";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userId, thunkApi) => {
    try {
      const response = await fetch(`${url}/${userId}`);
      if (!response.ok) {
        throw new Error("Страница не существует");
      }
      return await response.json();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } =
  userSlice.actions;
export default userSlice.reducer;
