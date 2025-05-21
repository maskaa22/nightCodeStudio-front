import { createSlice } from '@reduxjs/toolkit';
import { getUserData } from './operations';

const initialState = {
  name: '',
  email: '',
  balance: null,
};
const slice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      state.name = payload.data.name;
      state.email = payload.data.email;
      state.balance = payload.data.balance;
    });
  },
  reducers: {
    clearUser: () => initialState,
  },
});

export const { clearUser } = slice.actions;
export const userReducer = slice.reducer;
