import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/axios';

export const fetchStatistics = createAsyncThunk(
  'statistics/fetchAll',
  async (query, thunkAPI) => {
    try {
      const { data } = await api.get(`/transactions/summary?period=${query}`);

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
