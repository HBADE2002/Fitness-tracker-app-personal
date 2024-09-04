import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weight: null,
  height: null,
  bmi: null,
  nutritionLevel: null,
  waterIntake: null,
};

const healthMetricsSlice = createSlice({
  name: "healthMetrics",
  initialState,
  reducers: {
    setWeight: (state, action) => {
      state.weight = action.payload;
      if (state.height !== null) {
        state.bmi = calculateBMI(state.weight, state.height);
        state.nutritionLevel = calculateNutritionLevel(state.bmi);
      }
      if(state.weight !== null) {
        state.waterIntake = calculateWaterIntake(state.weight);
      }
    },
    setHeight: (state, action) => {
      state.height = action.payload;
      if (state.weight !== null) {
        state.bmi = calculateBMI(state.weight, state.height);
        state.nutritionLevel = calculateNutritionLevel(state.bmi);
      }
    },
  },
});

//helper functions

function calculateBMI(weight, height) {
    if(weight <= 0||height<=0) {
        return null;
    }
    return weight/((height/100)**2); // height in cm
}

function calculateNutritionLevel(bmi) {
    if(bmi === null) {
        return null;
    }
    if(bmi < 18.5) {
        return "Underweight";
    } else if(bmi <= 18.5) {
        return "Normal weight";
    } else if(bmi <= 25) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

function calculateWaterIntake(weight) {
    if(weight === null) {
        return null;
    }
    return weight * 0.033

}


export const { setWeight, setHeight } = healthMetricsSlice.actions;
export default healthMetricsSlice.reducer

