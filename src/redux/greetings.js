/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

export const fetchmessage = createAsyncThunk('greetings/fetchmessage', () => axios.get('http://localhost:3000/api/v1/greetings')
  .then((response) => {
    const { data } = response;
    return data.message;
  }));

const reducerGreetings = createSlice({
  name: 'greetings',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchmessage.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchmessage.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.error = '';
    });

    builder.addCase(fetchmessage.rejected, (state, action) => {
      state.loading = false;
      state.message = '';
      state.error = action.error.message;
    });
  },
});

export const { getGreeting } = reducerGreetings.actions;
export default reducerGreetings.reducer;
