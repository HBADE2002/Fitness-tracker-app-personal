/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addActivity, editActivity } from "../App/activitySlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import WorkoutList from "../components/Workout-components/WorkoutList";
import { FormControl } from "react-bootstrap";

const ActivityPage = () => {
  // Hook to dispatch actions to the Redux store
  const dispatch = useDispatch();
  
  // State to keep track of which workout is being edited (if any)
  const [editingId, setEditingId] = useState(null);
  
  // Selector to get the activities from the Redux store
  const activities = useSelector((state) => state.activities.activities);
  
  // State to manage the current workout being added or edited
  const [workout, setWorkout] = useState({
    type: "",
    duration: "",
    distance: "",
  });

  // State to manage form validation error messages
  const [error, setError] = useState("");

  // Effect to populate the form when editing an existing workout
  useEffect(() => {
    if (editingId) {
      const editingWorkout = activities.find((a) => a.id === editingId);
      if (editingWorkout) {
        setWorkout(editingWorkout);
      }
    }
// It's designed to populate the form (or whatever UI element is controlled by the workout state) when an activity is being edited.
// When editingId changes (presumably when the user selects an activity to edit), this effect runs.
// It looks for the activity with the matching ID in the activities array.
// If found, it updates the workout state with this activity's data, effectively populating the form with the existing data of the activity being edited.
// The effect also runs if the activities array changes, ensuring that the edited workout data stays in sync with any changes to the activities list.
  }, [editingId, activities]);

  // Function to handle form submission (add or edit workout)
  const handleSubmit = () => {
    // Form validation
    if (!workout.type || !workout.duration || !workout.distance) {
      setError("Please fill in all fields");
      return;
    }

    setError(""); // Clear any existing error

    if (editingId) {
      // If editing, dispatch edit action
      dispatch(editActivity({ id: editingId, updatedActivity: workout }));
      setEditingId(null);
    } else {
      // If adding new, dispatch add action
      const newWorkout = { ...workout, id: Date.now() };
      dispatch(addActivity(newWorkout));
    }
    setWorkout({ type: "", duration: "", distance: "" }); // Reset form
  };

  // Function to handle initiating edit of a workout
  const handleEdit = (id) => {
    setEditingId(id);
    setError(""); // Clear any existing error when starting to edit
  };

  return (
    <div className="activity-page-container">
      <h1>Exercise Tracker</h1>
      <h2>{editingId ? "Edit Workout" : "Add Workout"}</h2>
      <Form className="personalInfo-input-container">
        {/* Display error message if there is one */}
        {error && <div className="error-message">{error}</div>}
        
        {/* Workout type selection */}
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

        {/* Duration input */}
        <div>
          <Form.Label>Duration (minutes)</Form.Label>
          <FormControl
            className="input-container"
            type="number"
            value={workout.duration}
            onChange={(e) =>
              setWorkout({ ...workout, duration: e.target.value })
            }
          />
        </div>

        {/* Distance input */}
        <div>
          <label>Distance (km)</label>
          <FormControl
            className="input-container"
            type="number"
            value={workout.distance}
            onChange={(e) =>
              setWorkout({ ...workout, distance: e.target.value })
            }
          />
        </div>

        {/* Submit button - changes text based on whether adding or editing */}
        <Button type="button" onClick={handleSubmit}>
          {editingId ? "Update Workout" : "Add Workout"}
        </Button>

        {/* Cancel button - only shown when editing */}
        {editingId && (
          <Button type="button" variant="danger" onClick={() => {
            setEditingId(null);
            setWorkout({ type: "", duration: "", distance: "" });
            setError("");
          }}>
            Cancel Edit
          </Button>
        )}
      </Form>

      {/* List of workouts with edit functionality */}
      <WorkoutList onEdit={handleEdit} />
    </div>
  );
};

export default ActivityPage;