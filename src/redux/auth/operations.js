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
export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post('/auth/login', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk("auth/login", async (body, thunkAPI) => {
  try {
    const { data } = await api.post("/auth/login", body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
