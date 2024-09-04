// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHeight, setWeight } from "../App/healthMetricsSlice";

// eslint-disable-next-line react/prop-types
function HealthMetricsComponent({ weight, height }) {
  const dispatch = useDispatch();
  const { bmi, nutritionLevel, waterIntake, macronutrients } = useSelector(
    (state) => state.healthMetrics
  );

  useEffect(() => {
    if (weight) {
      dispatch(setWeight(weight));
    }
  }, [weight, dispatch]);

  useEffect(() => {
    if (height) {
      dispatch(setHeight(height));
    }
  }, [height, dispatch]);

  return (
    <div>
      <h2>Health Metrics</h2>
      <p>BMI: {bmi !== null ? bmi.toFixed(2) : 'N/A'}</p>
      <p>Nutrition Level: {nutritionLevel || 'N/A'}</p>
      <p>Recommended Water Intake: {waterIntake !== null ? `${waterIntake.toFixed(2)} liters` : 'N/A'}</p>
      <h3>Macronutrient Needs</h3>
      <p>Protein: {macronutrients.protein !== null ? `${macronutrients.protein.toFixed(2)} grams` : 'N/A'}</p>
      <p>Fat: {macronutrients.fat.min !== null && macronutrients.fat.max !== null 
              ? `${macronutrients.fat.min.toFixed(2)} - ${macronutrients.fat.max.toFixed(2)} grams` 
              : 'N/A'}</p>
      <p>Carbs: {macronutrients.carbs.min !== null && macronutrients.carbs.max !== null 
              ? `${macronutrients.carbs.min.toFixed(2)} - ${macronutrients.carbs.max.toFixed(2)} grams` 
              : 'N/A'}</p>
    </div>
  );
}

export default HealthMetricsComponent;
