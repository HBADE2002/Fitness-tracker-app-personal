import { configureStore } from '@reduxjs/toolkit';
import activityReducer from './activitySlice';
import healthMetricsSlice from './healthMetricsSlice';
import goalReducer from './goalSlice';
const store = configureStore({
  reducer: {
    activities: activityReducer,
    healthMetrics: healthMetricsSlice, 
    goalSlice: goalReducer,
  },
});

export default store;
