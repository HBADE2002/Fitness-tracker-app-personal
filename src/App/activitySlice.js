import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activities: [],  // Array to store logged activities
};

const activitySlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    addActivity: (state, action) => {
      state.activities.push(action.payload);
    },
    editActivity: (state, action) => {
      const { id, updatedActivity } = action.payload;
      const index = state.activities.findIndex(activity => activity.id === id);
      if (index !== -1) {
        state.activities[index] = updatedActivity;
      }
    },
    deleteActivity: (state, action) => {
      state.activities = state.activities.filter(activity => activity.id !== action.payload);
    },
  },
});

export const { addActivity, editActivity, deleteActivity } = activitySlice.actions;
export default activitySlice.reducer;
