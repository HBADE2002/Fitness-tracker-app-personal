/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addActivity } from "../../App/activitySlice";

const AddWorkout = () => {
  const dispatch = useDispatch();
  const [workout, setWorkout] = useState({
    type: "",
    duration: 0,
    distance: 0,
  });

  const handleAdd = () => {
    const newWorkout = { ...workout, id: Date.now() };
    dispatch(addActivity(newWorkout));
    setWorkout({ type: "", duration: 0, distance: 0 }); // Reset form
  };

  return (
    <div>
      <h2>Add Workout</h2>
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
              setWorkout({ ...workout, duration: e.target.value })
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
              setWorkout({ ...workout, distance: e.target.value })
            }
          />
        </div>
        <Button type="button" onClick={handleAdd}>
          Add Workout
        </Button>
      </Form>
    </div>
  );
};

export default AddWorkout;
