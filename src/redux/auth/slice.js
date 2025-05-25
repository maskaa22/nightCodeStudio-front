import { createSlice } from '@reduxjs/toolkit';
import { registerThunk, logIn, logout, refreshUser } from './operations';
import { ref } from 'yup';

const initialState = {
  accessToken: '',
  isLoggedIn: false,
  isRefreshing: false,
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
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, () => initialState);
  },
});
export const authReducer = slice.reducer;
