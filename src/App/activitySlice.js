import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activities: [],  // Array to store logged activities
};

const activitySlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    addActivity: (state, action) => { // Add a new activity
      state.activities.push(action.payload); 
    },
    editActivity: (state, action) => {  // Edit a activity
      const { id, updatedActivity } = action.payload; // 
      const index = state.activities.findIndex(activity => activity.id === id); 
      if (index !== -1) {
        state.activities[index] = updatedActivity;
      }
// When you dispatch an action to edit an activity, you provide the activity's id and the updatedActivity object.
// The reducer function finds the position of the activity in the array using its id.
// If found, it replaces the old activity data with the new updatedActivity data.
// If not found (i.e., index === -1), no changes are made to the state.
    },
    deleteActivity: (state, action) => { // Delete a activity
      state.activities = state.activities.filter(activity => activity.id !== action.payload);
    },
// When you dispatch an action to delete an activity, you provide the activity's id as the action.payload.
// The reducer function creates a new array that includes all activities except the one with the matching id.
// This new array becomes the new state.activities, effectively deleting the activity from the state.
  },
});

export const { addActivity, editActivity, deleteActivity } = activitySlice.actions; // export the actions
export default activitySlice.reducer; //export the reducer as a whole
