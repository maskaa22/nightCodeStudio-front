import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/axios';

import { getUserData } from '../user/operations';

export const getTransactions = createAsyncThunk(
  'transactions/getAll',
  async ({ signal }, thunkAPI) => {
    try {
      const { data } = await api.get('/transactions', { signal });

      return data.transactions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post('/transactions', body);
      await thunkAPI.dispatch(getUserData());

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateTransaction = createAsyncThunk(
  'transactions/updateTransaction',
  async ({ id, ...body }, thunkAPI) => {
    try {
      const { data } = await api.patch(`/transactions/${id}`, body);

      await thunkAPI.dispatch(getUserData());

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async ({ id }, thunkAPI) => {
    try {
      await api.delete(`transactions/${id}`);

      await thunkAPI.dispatch(getUserData());
      return { id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
