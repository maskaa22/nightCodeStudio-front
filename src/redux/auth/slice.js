import { createSlice } from '@reduxjs/toolkit';
import { registerThunk, logIn, logout } from './operations';

const initialState = {
  accessToken: '',
  isLoggedIn: false,
};
const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.accessToken = payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.accessToken = payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, () => initialState);
  },
});
export const authReducer = slice.reducer;
