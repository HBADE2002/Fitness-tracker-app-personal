import { configureStore } from '@reduxjs/toolkit';
import activityReducer from './activitySlice';
import healthMetricsSlice from './healthMetricsSlice';
const store = configureStore({
  reducer: {
    activities: activityReducer,
    healthMetrics: healthMetricsSlice, 
  },
});

export default store;
