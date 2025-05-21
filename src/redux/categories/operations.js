import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/axios';
import { selectAccessToken } from '../auth/selectors';
import { setAuthHeader } from '../../api/authHeader';

export const getCategoriesData = createAsyncThunk(
  'categories/getCategories',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = selectAccessToken(state);

      if (!token) {
        throw new Error('No access token found');
      }

      const { data } = await api.get(`/categories`, setAuthHeader(token));

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
