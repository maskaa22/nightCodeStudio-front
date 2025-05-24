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
  extraReducers: (builder, thunkAPI) => {
    builder
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(getTransactions.pending, handlePending)
      .addCase(getTransactions.rejected, handleRejected)

      .addCase(addTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
        // thunkAPI.dispatch(getTransactions());
      })
      .addCase(addTransaction.pending, handlePending)
      .addCase(addTransaction.rejected, handleRejected)
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex((t) => t.id === action.payload.id);
        state.items.splice(index, 1, action.payload);
        // if (index !== -1) {
        //   state.items[index] = { ...state.items[index], ...action.payload };
        // }
        // thunkAPI.dispatch(getTransactions());
      })
      .addCase(updateTransaction.pending, handlePending)
      .addCase(updateTransaction.rejected, handleRejected);
  },
});

export const transactionsReducer = slice.reducer;
