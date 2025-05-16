import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../auth/operations";

export const fetchStatistics = createAsyncThunk(
  "statistics/fetchAll",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post(`/statistics`, body);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
