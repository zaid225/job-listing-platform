// store.js
import { configureStore } from '@reduxjs/toolkit';
import jobSlice from './features/jobs/jobsSlice';

export const store = configureStore({
  reducer: {
    jobs: jobSlice,
  },
});
