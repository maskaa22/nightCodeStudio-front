import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/axios.js';

export const getUserData = createAsyncThunk(
  'user/getData',
  async (body, thunkAPI) => {
    try {
      const { data } = await api.get('/user/me');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);
