// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHeight, setWeight } from "../App/healthMetricsSlice";

// eslint-disable-next-line react/prop-types
function HealthMetricsComponent({ weight, height }) {
  const dispatch = useDispatch();
  const { bmi, nutritionLevel, waterIntake } = useSelector(
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
    </div>
  );
}

export default HealthMetricsComponent;
