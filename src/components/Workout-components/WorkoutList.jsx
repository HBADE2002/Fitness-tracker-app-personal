/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteActivity } from "../../App/activitySlice";
import { Button } from "react-bootstrap";

const WorkoutList = ({ onEdit }) => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities.activities);

  const handleDelete = (id) => {
    dispatch(deleteActivity(id));
  };

// It sets up the component to interact with the Redux store by providing access to the dispatch function and the current activities state.
// It defines a handleDelete function that can be called with an activity's ID.
// When handleDelete is called (probably from a button click or similar event), it dispatches a deleteActivity action to the Redux store.
// The Redux reducer (which we saw in a previous question) will then process this action and remove the activity from the state.
// Because the component is selecting the activities from the state, it will automatically re-render with the updated list of activities once the state has been updated.

  return (
    <div className="workout-list-container">
      <h2>Workout List</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <div>
              <span>{activity.type}</span> |
              <span>{activity.duration} mins</span> |
              <span>{activity.distance} km</span>
              <Button variant="primary" onClick={() => onEdit(activity.id)}>Edit</Button>
              <Button variant="danger" onClick={() => handleDelete(activity.id)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;