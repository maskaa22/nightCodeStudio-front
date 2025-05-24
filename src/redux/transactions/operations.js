import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/axios';
import { selectAccessToken } from '../auth/selectors';
import { setAuthHeader } from '../../api/authHeader';

export const getTransactions = createAsyncThunk(
  'transactions/getAll',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = selectAccessToken(state);

      if (!token) {
        throw new Error('No access token found');
      }

      const { data } = await api.get('/transactions', setAuthHeader(token));

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
      const state = thunkAPI.getState();
      const token = selectAccessToken(state);

      if (!token) {
        throw new Error('No access token found');
      }

      const { data } = await api.post(
        '/transactions',
        body,
        setAuthHeader(token),
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateTransaction = createAsyncThunk(
  'transactions/updateTransaction',
  async ({ id, ...body }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = selectAccessToken(state);

      if (!token) {
        throw new Error('No access token found');
      }

      const { data } = await api.patch(
        `/transactions/${id}`,
        body,
        setAuthHeader(token),
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
