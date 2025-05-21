import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/axios.js';
import { clearAuthHeader, setAuthHeader } from '../../api/authHeader.js';
import { getUserData } from '../user/operations.js';
import { clearUser } from '../user/slice.js';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (body, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await api.post('/auth/register', body);
      setAuthHeader(data.data.accessToken);
      await dispatch(getUserData());
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (body, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await api.post('/auth/login', body);
      setAuthHeader(data.data.accessToken);
      await dispatch(getUserData());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (body, { dispatch, rejectWithValue }) => {
    try {
      await api.post('/auth/logout');
      clearAuthHeader();
      dispatch(clearUser());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
