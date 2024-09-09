// DeleteGoal.js
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../../App/goalSlice';
import { Button } from 'react-bootstrap';

const DeleteGoal = ({ goalId, onDeleteComplete }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this goal?')) {
      dispatch(deleteGoal(goalId)); // Dispatching the action with the correct goalId
      if (onDeleteComplete) {
        onDeleteComplete();
      }
    }
  };

  return (
    <Button onClick={handleDelete} variant="danger">
      Delete Goal
    </Button>
  );
};

export default DeleteGoal;