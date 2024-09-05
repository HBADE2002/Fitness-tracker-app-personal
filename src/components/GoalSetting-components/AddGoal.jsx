// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../../App/goalSlice"; // Assuming your goalSlice is stored in the App folder
import { Form, Button } from "react-bootstrap";

const AddGoal = () => {
  const dispatch = useDispatch();
  
  // Defining local state for form inputs
  const [goalType, setGoalType] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [targetValue, setTargetValue] = useState("");
  const [unit, setUnit] = useState("");
  const [deadline, setDeadline] = useState("");
  const [frequency, setFrequency] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validating the form before dispatch
    if (!goalType || !currentValue || !targetValue || !unit || !deadline) {
      return alert("Please fill in all required fields.");
    }

    const goalData = {
      goalType,
      currentValue,
      targetValue,
      unit,
      deadline,
      frequency: frequency || null, // If frequency is optional
      notes: notes || "", // Default to empty string if no notes
    };

    // Dispatching the action to add a new goal
    dispatch(addGoal(goalData));

    // Clearing the form after successful submission
    setGoalType("");
    setCurrentValue("");
    setTargetValue("");
    setUnit("");
    setDeadline("");
    setFrequency("");
    setNotes("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Form.Label htmlFor="goalType">Goal Type</Form.Label>
          <Form.Select
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

        <div className="flex space-x-4">
          <div className="flex-1">
            <Form.Label htmlFor="currentValue">Current Value</Form.Label>
            <Form.Control
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
              id="unit"
              type="text"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              placeholder="e.g., kg, miles, reps"
              required
            />
          </div>
        </div>

        <div>
          <Form.Label htmlFor="deadline">Deadline</Form.Label>
          <Form.Control
            id="deadline"
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>

        <div>
          <Form.Label htmlFor="frequency">Frequency</Form.Label>
          <Form.Select
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

        <div>
          <Form.Label htmlFor="notes">Additional Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any additional details or strategy for achieving this goal"
          />
        </div>

        <div className="d-flex justify-content-between mt-4">
          <Button type="submit" variant="primary">
            Create Goal
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AddGoal;
