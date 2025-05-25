import {
  createSlice,
  isPending,
  isRejected,
  isFulfilled,
} from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isPending, (state) => {
        state.loading = true;
      })
      .addMatcher(isFulfilled, (state) => {
        state.loading = false;
      })
      .addMatcher(isRejected, (state) => {
        state.loading = false;
      });
  },
});

export default loaderSlice.reducer;
