/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActivity } from '../App/activitySlice';

const AddWorkout = () => {
  const dispatch = useDispatch();
  const [workout, setWorkout] = useState({ type: '', duration: 0, distance: 0 });

  const handleAdd = () => {
    const newWorkout = { ...workout, id: Date.now() };
    dispatch(addActivity(newWorkout));
    setWorkout({ type: '', duration: 0, distance: 0 }); // Reset form
  };

  return (
    <div>
      <h2>Add Workout</h2>
      <form>
        <div>
          <label>Type of Workout</label>
          <select
            value={workout.type}
            onChange={(e) => setWorkout({ ...workout, type: e.target.value })}
          >
            <option value="">Select Workout</option>
            <option value="Running">Running</option>
            <option value="Walking">Walking</option>
            <option value="Cycling">Cycling</option>
            <option value="Swimming">Swimming</option>
          </select>
        </div>
        <div>
          <label>Duration (minutes)</label>
          <input
            type="number"
            value={workout.duration}
            onChange={(e) => setWorkout({ ...workout, duration: e.target.value })}
          />
        </div>
        <div>
          <label>Distance (km)</label>
          <input
            type="number"
            value={workout.distance}
            onChange={(e) => setWorkout({ ...workout, distance: e.target.value })}
          />
        </div>
        <button type="button" onClick={handleAdd}>Add Workout</button>
      </form>
    </div>
  );
};

export default AddWorkout;
