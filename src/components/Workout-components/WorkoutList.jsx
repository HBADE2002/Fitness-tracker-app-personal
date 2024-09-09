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