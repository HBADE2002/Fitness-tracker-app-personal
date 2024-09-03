/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import AddWorkout from '../components/AddWorkout';
import WorkoutList from '../components/WorkoutList';
import EditWorkout from '../components/EditWorkout';

const ActivityPage = () => {
  const [editingId, setEditingId] = useState(null);

  return (
    <div>
      <h1>Activity Tracker</h1>
      {editingId ? (
        <EditWorkout id={editingId} />
      ) : (
        <AddWorkout />
      )}
      <WorkoutList onEdit={setEditingId} />
    </div>
  );
};

export default ActivityPage;
