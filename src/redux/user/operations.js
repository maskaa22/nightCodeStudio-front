import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/axios.js';
import { selectAccessToken } from '../auth/selectors';
import { setAuthHeader } from '../../api/authHeader.js';

export const getUserData = createAsyncThunk(
  'user/getData',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = selectAccessToken(state);

      if (!token) {
        throw new Error('No access token found');
      }

      const { data } = await api.get('/users/me', setAuthHeader(token));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);
