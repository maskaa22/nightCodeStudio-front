import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/axios.js';
import { selectAccessToken } from '../auth/selectors.js';

export const getTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async (transactionData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = selectAccessToken(state);

      if (!token) {
        return thunkAPI.rejectWithValue('No access token found');
      }

      const { data } = await api.get('/transactions', transactionData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
