import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice({
    name: 'goals',
    initialState: [],
    reducers: {
        addGoal: (state, action) => {
            state.push = ({...action.payload, id:Date.now()});
        },
        updateGoal: (state, action) => {
            const index = state.findIndex(goal => goal.id === action.payload.id);
            if(index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteGoal: (state, action) => {
            state = state.filter(goal => goal.id!== action.payload);
        },
    },
});

export const { addGoal, updateGoal, deleteGoal } = goalSlice.actions;

export default goalSlice.reducer;