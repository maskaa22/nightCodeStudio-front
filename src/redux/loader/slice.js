import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'loader',
  initialState: false,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => {
          return action.type.endsWith('pending');
        },
        () => {
          return true;
        },
      )
      .addMatcher(
        (action) => {
          return (
            action.type.endsWith('fulfilled') ||
            action.type.endsWith('rejected')
          );
        },
        () => {
          return false;
        },
      );
  },
});

export const loaderReducer = slice.reducer;
