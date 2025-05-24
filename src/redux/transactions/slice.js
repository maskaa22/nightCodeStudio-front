import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  getTransactions,
  updateTransaction,
} from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(getTransactions.pending, handlePending)
      .addCase(getTransactions.rejected, handleRejected)

      .addCase(addTransaction.fulfilled, (state, action) => {
        state.loading = false;
        // state.items.push(action.payload);
      })
      .addCase(addTransaction.pending, handlePending)
      .addCase(addTransaction.rejected, handleRejected)
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateTransaction.pending, handlePending)
      .addCase(updateTransaction.rejected, handleRejected);
  },
});

export const transactionsReducer = slice.reducer;
