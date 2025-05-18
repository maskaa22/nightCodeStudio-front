import { createSlice } from '@reduxjs/toolkit';
import { registerThunk, logIn } from './operations';

const initialState = {
  data: {
    name: '',
    email: '',
  },
  isLoggedIn: false,
};
const slice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    });

    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
  },
});
export const authReducer = slice.reducer;
