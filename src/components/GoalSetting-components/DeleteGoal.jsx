// DeleteGoal.js
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../../App/goalSlice';
import { Button } from 'react-bootstrap';

const DeleteGoal = ({ goalId, onDeleteComplete }) => {
  // Use the useDispatch hook to get a reference to the Redux dispatch function
  const dispatch = useDispatch();

  // Define a function to handle the deletion of a goal
  const handleDelete = () => {
    // Show a confirmation dialog to the user
    if (window.confirm('Are you sure you want to delete this goal?')) {
      // Dispatch the deleteGoal action with the correct goalId
      dispatch(deleteGoal(goalId));

      // If an onDeleteComplete function is provided, call it
      if (onDeleteComplete) {
        onDeleteComplete();
      }
    }
  };

  // Render a button that, when clicked, calls the handleDelete function
  return (
    <Button onClick={handleDelete} variant="danger">
      Delete Goal
    </Button>
  );
};

export default DeleteGoal;