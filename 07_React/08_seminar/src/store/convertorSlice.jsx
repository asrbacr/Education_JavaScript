import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchJoke = createAsyncThunk(
  "joke/fetchJoke",

  async (url, thunkApi) => {
    // const { rejectWithValue, getState, dispatch} = thunkApi;
    try {
      setLoading(true);
      const response = await fetch(url);
      console.log(response);

      if (!response.ok) {
        throw new Error({ message: response.status });
      }

      const data = await response.json();

      return data.value; // в данном случае вернётся только value
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    //   return rejectWithValue(error.message); если диструктуризациия
    }
  }
);
export const jockSlice = {
  value: "",
  loading: false,
  error: null,
};

const jockSlice = createSlice({
  name: "joke",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.pending, (state) => {
        // ожидание
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJoke.fulfilled, ({ state, action }) => {
        // успешно выполнено
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(fetchJoke.rejected, (state, action) => {
        // отклонено, в случае ошибки
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default jockSlice.reducer;
