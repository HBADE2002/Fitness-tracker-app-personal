/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AddWorkout from "../components/Workout-components/AddWorkout";
import WorkoutList from "../components/Workout-components/WorkoutList";
import EditWorkout from "../components/Workout-components/EditWorkout";

const ActivityPage = () => {
  const [editingId, setEditingId] = useState(null);

  return (
    <div className="activity-page-container">
      <h1>Activity Tracker</h1>
      {editingId ? <EditWorkout id={editingId} /> : <AddWorkout />}
      <WorkoutList onEdit={setEditingId} />
    </div>
  );
};

export default ActivityPage;
