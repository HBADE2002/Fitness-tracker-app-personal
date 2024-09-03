import { configureStore } from '@reduxjs/toolkit';
import activityReducer from './activitySlice';

const store = configureStore({
  reducer: {
    activities: activityReducer,
  },
});

export default store;
