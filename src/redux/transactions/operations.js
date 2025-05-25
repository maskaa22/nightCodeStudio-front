import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/axios';
import { setAuthHeader } from '../../api/authHeader';
import { selectAccessToken } from '../auth/selectors';

import { getUserData } from '../user/operations';

// import { selectAccessToken } from '../auth/selectors';
// import { setAuthHeader } from '../../api/authHeader';

export const getTransactions = createAsyncThunk(
  'transactions/getAll',
  async ({ signal }, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const token = selectAccessToken(state);

      // if (!token) {
      //   throw new Error('No access token found');
      // }

      // const { data } = await api.get('/transactions', setAuthHeader(token));

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
      // const state = thunkAPI.getState();
      // const token = selectAccessToken(state);

      // if (!token) {
      //   throw new Error('No access token found');
      // }

      // const { data } = await api.post(
      //   '/transactions',
      //   body,
      //   setAuthHeader(token),

      // );

      const data = await api.post('/transactions', body);
      await thunkAPI.dispatch(getUserData());

      return data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateTransaction = createAsyncThunk(
  'transactions/updateTransaction',
  async ({ id, ...body }, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const token = selectAccessToken(state);

      // if (!token) {
      //   throw new Error('No access token found');
      // }

      // const { data } = await api.patch(
      //   `/transactions/${id}`,
      //   body,
      //   setAuthHeader(token),

      // );

      const data = await api.patch(`/transactions/${id}`, body);

      await thunkAPI.dispatch(getUserData());

      return data.data.data;
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
