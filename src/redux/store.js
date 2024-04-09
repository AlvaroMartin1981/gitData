// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import gitUserReducer from './gitUserSlice';

export const store = configureStore({
  reducer: {
    gitUser: gitUserReducer
  }
});
