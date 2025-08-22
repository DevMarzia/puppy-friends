import { configureStore } from '@reduxjs/toolkit';
import authReducer from  './auth/auhtSlice';
import puppiesReducer from './puppies/puppiesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    puppies: puppiesReducer
  },
});
