import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weight: null,
  height: null,
  bmi: null,
  nutritionLevel: null,
  waterIntake: null,
  macronutrients: {
    protein: null,
    fat: { min: null, max: null },
    carbs: { min: null, max: null },
  },
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
      if (state.weight !== null) {
        state.waterIntake = calculateWaterIntake(state.weight);
        state.macronutrients = calculateMacronutrients(state.weight);
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

// Helper functions

function calculateBMI(weight, height) {
  if (weight <= 0 || height <= 0) {
    return null;
  }
  return weight / (height / 100) ** 2; // height in cm
}

function calculateNutritionLevel(bmi) {
  if (bmi === null || isNaN(bmi)) {
    return null;
  }

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 24.9) {
    return "Normal weight";
  } else if (bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

function calculateWaterIntake(weight) {
  if (weight === null) {
    return null;
  }
  return weight * 0.033; // Water intake in liters
}

function calculateMacronutrients(weight) {
  if (weight === null) {
    return {
      protein: null,
      fat: { min: null, max: null },
      carbs: { min: null, max: null },
    };
  }

  const protein = weight * 1.5; // Protein = weight (kg) * 2
  const fat = {
    min: weight * 0.75, // Fat = weight (kg) * 0.75 - 1.25
    max: weight *1.25,
  };
  const carbs = {
    min: weight * 3.5, // Carbs = weight (kg) * 3.5 - 6.5
    max: weight * 6.5,
  };

  return {
    protein,
    fat,
    carbs,
  };
}

export const { setWeight, setHeight } = healthMetricsSlice.actions;
export default healthMetricsSlice.reducer;
