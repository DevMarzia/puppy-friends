
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // libreria richieste http viene usata per comunicare con il backend simulato json-server

const API_URL = 'http://localhost:3001/puppies';

export const fetchPuppies = createAsyncThunk('puppies/fetchPuppies', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addNewPuppy = createAsyncThunk('puppies/addNewPuppy', async (newPuppyData) => {
  const response = await axios.post(API_URL, newPuppyData);
  return response.data;
});

export const updateExistingPuppy = createAsyncThunk('puppies/updateExistingPuppy', async (puppyData) => {
  const response = await axios.put(`${API_URL}/${puppyData.id}`, puppyData);
  return response.data;
});

export const deleteExistingPuppy = createAsyncThunk('puppies/deleteExistingPuppy', async (puppyId) => {
  await axios.delete(`${API_URL}/${puppyId}`);
  return puppyId;
});

const puppiesSlice = createSlice({
  name: 'puppies',
  initialState: {
    items: [],
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => { //gestisce operazioni in più come async thunk (operazioni asincrone)
    builder // definisce le azioni che possono essere eseguite
      .addCase(fetchPuppies.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchPuppies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPuppies.rejected, (state, action) => { state.status = 'failed'; state.error = action.error.message; })
      .addCase(addNewPuppy.fulfilled, (state, action) => { state.items.push(action.payload); })
      .addCase(updateExistingPuppy.fulfilled, (state, action) => {
        const index = state.items.findIndex(p => p.id === action.payload.id);
        if (index !== -1) { state.items[index] = action.payload; }
      })
      .addCase(deleteExistingPuppy.fulfilled, (state, action) => {
        state.items = state.items.filter(p => p.id !== action.payload);
      });
  },
});

export default puppiesSlice.reducer;





