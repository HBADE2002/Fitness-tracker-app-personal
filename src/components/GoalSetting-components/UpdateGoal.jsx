/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateGoal } from '../../App/goalSlice';
import { Button, Form } from 'react-bootstrap';

const UpdateGoal = ({ goal }) => {
  const dispatch = useDispatch();

  // Initialize state with the goal's values
  const [goalType, setGoalType] = useState(goal.goalType);
  const [currentValue, setCurrentValue] = useState(goal.currentValue);
  const [targetValue, setTargetValue] = useState(goal.targetValue);
  const [unit, setUnit] = useState(goal.unit);
  const [deadline, setDeadline] = useState(goal.deadline);
  const [frequency, setFrequency] = useState(goal.frequency || '');
  const [notes, setNotes] = useState(goal.notes || '');

  // Update state when the goal prop changes
  useEffect(() => {
    setGoalType(goal.goalType);
    setCurrentValue(goal.currentValue);
    setTargetValue(goal.targetValue);
    setUnit(goal.unit);
    setDeadline(goal.deadline);
    setFrequency(goal.frequency || '');
    setNotes(goal.notes || '');
  }, [goal]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the updated goal object
    const updatedGoal = {
      ...goal,  // Copy over the original goal data
      goalType,
      currentValue,
      targetValue,
      unit,
      deadline,
      frequency,
      notes,
    };

    // Dispatch the updateGoal action with the updated goal
    dispatch(updateGoal(updatedGoal));
  };

  return (
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
          Update Goal
        </Button>
      </div>
    </Form>
  );
};

export default UpdateGoal;
