/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// AddGoal.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addGoal, updateGoal } from "../../App/goalSlice";
import { Form, Button } from "react-bootstrap";

const AddGoal = ({ initialGoal, onCancel }) => {
  // Use the useDispatch hook to get a reference to the Redux dispatch function
  const dispatch = useDispatch();

  // Define state variables for the form fields
  const [goalType, setGoalType] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [targetValue, setTargetValue] = useState("");
  const [unit, setUnit] = useState("");
  const [deadline, setDeadline] = useState("");
  const [frequency, setFrequency] = useState("");
  const [notes, setNotes] = useState("");

  // Use the useEffect hook to populate the form fields if an initialGoal is provided
  useEffect(() => {
    if (initialGoal) {
      // If an initialGoal is provided, set the form fields to the values of the initialGoal
      setGoalType(initialGoal.goalType);
      setCurrentValue(initialGoal.currentValue);
      setTargetValue(initialGoal.targetValue);
      setUnit(initialGoal.unit);
      setDeadline(initialGoal.deadline);
      setFrequency(initialGoal.frequency || "");
      setNotes(initialGoal.notes || "");
    }
    else{
      // If no initialGoal is provided, reset the form fields
      resetForm();
    }
  }, [initialGoal]);

  // Define a function to handle the form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Validate the form fields
    if (!goalType || !currentValue || !targetValue || !unit || !deadline) {
      // If any required fields are missing, show an alert
      return alert("Please fill in all required fields.");
    }

    // Create an object with the form data
    const goalData = {
      goalType,
      currentValue,
      targetValue,
      unit,
      deadline,
      frequency: frequency || null,
      notes: notes || "",
    };

    // If an initialGoal is provided, update the existing goal
    if (initialGoal) {
      dispatch(updateGoal({ ...initialGoal, ...goalData }));
    } else {
      // If no initialGoal is provided, create a new goal
      dispatch(addGoal(goalData));
    }

    // Reset the form fields
    resetForm();

    // If an onCancel function is provided, call it
    if (onCancel) {
      onCancel();
    }
  };

  // Define a function to reset the form fields
  const resetForm = () => {
    setGoalType("");
    setCurrentValue("");
    setTargetValue("");
    setUnit("");
    setDeadline("");
    setFrequency("");
    setNotes("");
  };

  // Render the form
  return (
    <Form onSubmit={handleSubmit} className="space-y-4">
      {/* Goal Type input */}
      <div>
        <Form.Label htmlFor="goalType">Goal Type</Form.Label>
        <Form.Select
          className="input-container"
          id="goalType"
          value={goalType}
          onChange={(e) => setGoalType(e.target.value)}
          required
        >
          <option value="">Select a goal type</option>
          <option value="weight">Weight Loss/Gain</option>
          <option value="exercise">Exercise Frequency</option>
          <option value="strength">Strength Training</option>
          <option value="endurance">Endurance</option>
          <option value="nutrition">Nutrition</option>
        </Form.Select>
      </div>

      {/* Current Value, Target Value, and Unit inputs */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <Form.Label htmlFor="currentValue">Current Value</Form.Label>
          <Form.Control
            className="input-container"
            id="currentValue"
            type="number"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            required
          />
        </div>
        <div className="flex-1">
          <Form.Label htmlFor="targetValue">Target Value</Form.Label>
          <Form.Control
            className="input-container"
            id="targetValue"
            type="number"
            value={targetValue}
            onChange={(e) => setTargetValue(e.target.value)}
            required
          />
        </div>
        <div className="flex-1">
          <Form.Label htmlFor="unit">Unit</Form.Label>
          <Form.Control
            className="input-container"
            id="unit"
            type="text"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            placeholder="e.g., kg, miles, reps"
            required
          />
        </div>
      </div>

      {/* Deadline input */}
      <div>
        <Form.Label htmlFor="deadline">Deadline</Form.Label>
        <Form.Control
          className="input-container"
          id="deadline"
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
      </div>

      {/* Frequency input */}
      <div>
        <Form.Label htmlFor="frequency">Frequency</Form.Label>
        <Form.Select
          className="input-container"
          id="frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="">Select frequency (if applicable)</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </Form.Select>
      </div>

      {/* Notes input */}
      <div>
        <Form.Label htmlFor="notes">Additional Notes</Form.Label>
        <Form.Control
          className="input-container"
          as="textarea"
          rows={3}
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Any additional details or strategy for achieving this goal"
        />
      </div>

      {/* Submit and Cancel buttons */}
      <div className="d-flex justify-content-between mt-4">
        <Button type="submit" variant="primary">
          {initialGoal ? "Update Goal" : "Create Goal"}
        </Button>
        {initialGoal && (
          <Button type="button" variant="danger" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>
    </Form>
  );
};

export default AddGoal;