import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registerThunk } from './operations';

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
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.data = action.payload.data.accessToken;
      state.isLoggedIn = true;
    });
  },
});
export const authReducer = slice.reducer;
