import { createSlice } from '@reduxjs/toolkit';
import { getUserData } from './operations.js';

const initialState = {
  name: '',
  email: '',
  balance: null,
  photo: '',
};
const slice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      state.name = payload.data.name;
      state.email = payload.data.email;
      state.balance = payload.data.balance;
      state.photo = payload.data.photo || '';
    });
  },
  reducers: {
    clearUser: () => initialState,
    setUserPhoto: (state, action) => {
      state.photo = action.payload;
    },
  },
});

export const { clearUser, setUserPhoto } = slice.actions;
export const userReducer = slice.reducer;
