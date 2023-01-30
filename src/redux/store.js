import { configureStore } from '@reduxjs/toolkit';
import addSlice from './slices/addSlice';
import resultSlice from'./slices/resultSlice';

export const store = configureStore({
  reducer: {
    addSlice,
    resultSlice,
  },
})