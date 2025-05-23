import { createSlice } from '@reduxjs/toolkit';
import { getCategoriesData } from './operations';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesData.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(getCategoriesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoriesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const categoriesReducer = slice.reducer;
