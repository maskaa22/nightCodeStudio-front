import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://nightcodestudio-backend.onrender.com',
});

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post('/auth/register', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);

export const logIn = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const { data } = await api.post('/auth/login', body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await api.post('/auth/logout');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
