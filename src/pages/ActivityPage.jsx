/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addActivity, editActivity } from "../App/activitySlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import WorkoutList from "../components/Workout-components/WorkoutList";

const ActivityPage = () => {
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const activities = useSelector((state) => state.activities.activities);
  
  const [workout, setWorkout] = useState({
    type: "",
    duration: 0,
    distance: 0,
  });

  useEffect(() => {
    if (editingId) {
      const editingWorkout = activities.find((a) => a.id === editingId);
      if (editingWorkout) {
        setWorkout(editingWorkout);
      }
    }
  }, [editingId, activities]);

  const handleSubmit = () => {
    if (editingId) {
      dispatch(editActivity({ id: editingId, updatedActivity: workout }));
      setEditingId(null);
    } else {
      const newWorkout = { ...workout, id: Date.now() };
      dispatch(addActivity(newWorkout));
    }
    setWorkout({ type: "", duration: 0, distance: 0 }); // Reset form
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  return (
    <div className="activity-page-container">
      <h1>Activity Tracker</h1>
      <h2>{editingId ? "Edit Workout" : "Add Workout"}</h2>
      <Form className="personalInfo-input-container">
        <div>
          <Form.Label>Type of Workout</Form.Label>
          <Form.Select
            value={workout.type}
            onChange={(e) => setWorkout({ ...workout, type: e.target.value })}
          >
            <option value="">Select Workout</option>
            <option value="Running">Running</option>
            <option value="Walking">Walking</option>
            <option value="Cycling">Cycling</option>
            <option value="Swimming">Swimming</option>
          </Form.Select>
        </div>
        <div>
          <Form.Label>Duration (minutes)</Form.Label>
          <input
            className="input-container"
            type="number"
            value={workout.duration}
            onChange={(e) =>
              setWorkout({ ...workout, duration: Number(e.target.value) })
            }
          />
        </div>
        <div>
          <label>Distance (km)</label>
          <input
            className="input-container"
            type="number"
            value={workout.distance}
            onChange={(e) =>
              setWorkout({ ...workout, distance: Number(e.target.value) })
            }
          />
        </div>
        <Button type="button" onClick={handleSubmit}>
          {editingId ? "Update Workout" : "Add Workout"}
        </Button>
        {editingId && (
          <Button type="button" onClick={() => setEditingId(null)}>
            Cancel Edit
          </Button>
        )}
      </Form>
      <WorkoutList onEdit={handleEdit} />
    </div>
  );
};

export default ActivityPage;