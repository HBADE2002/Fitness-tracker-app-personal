/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// AddGoal.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addGoal, updateGoal } from "../../App/goalSlice";
import { Form, Button } from "react-bootstrap";

const AddGoal = ({ initialGoal, onCancel }) => {
  const dispatch = useDispatch();
  const [goalType, setGoalType] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [targetValue, setTargetValue] = useState("");
  const [unit, setUnit] = useState("");
  const [deadline, setDeadline] = useState("");
  const [frequency, setFrequency] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (initialGoal) {
      setGoalType(initialGoal.goalType);
      setCurrentValue(initialGoal.currentValue);
      setTargetValue(initialGoal.targetValue);
      setUnit(initialGoal.unit);
      setDeadline(initialGoal.deadline);
      setFrequency(initialGoal.frequency || "");
      setNotes(initialGoal.notes || "");
    }
  }, [initialGoal]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!goalType || !currentValue || !targetValue || !unit || !deadline) {
      return alert("Please fill in all required fields.");
    }

    const goalData = {
      goalType,
      currentValue,
      targetValue,
      unit,
      deadline,
      frequency: frequency || null,
      notes: notes || "",
    };

    if (initialGoal) {
      dispatch(updateGoal({ ...initialGoal, ...goalData }));
    } else {
      dispatch(addGoal(goalData));
    }

    resetForm();
    if (onCancel) onCancel();
  };

  const resetForm = () => {
    setGoalType("");
    setCurrentValue("");
    setTargetValue("");
    setUnit("");
    setDeadline("");
    setFrequency("");
    setNotes("");
  };

  return (
    <Form onSubmit={handleSubmit} className="space-y-4">
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

      <div className="d-flex justify-content-between mt-4">
        <Button type="submit" variant="primary">
          {initialGoal ? "Update Goal" : "Create Goal"}
        </Button>
        {initialGoal && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>
    </Form>
  );
};

export default AddGoal;