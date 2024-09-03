/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editActivity } from "../../App/activitySlice";

const EditWorkout = ({ id }) => {
  const dispatch = useDispatch();
  const activity = useSelector((state) =>
    state.activities.activities.find((a) => a.id === id)
  );
  const [updatedActivity, setUpdatedActivity] = useState(activity);

  const handleEdit = () => {
    dispatch(editActivity({ id, updatedActivity }));
  };

  return (
    <div>
      <h2>Edit Workout</h2>
      <form>
        <div>
          <label>Type of Workout</label>
          <select
            value={updatedActivity.type}
            onChange={(e) =>
              setUpdatedActivity({ ...updatedActivity, type: e.target.value })
            }
          >
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
            value={updatedActivity.duration}
            onChange={(e) =>
              setUpdatedActivity({
                ...updatedActivity,
                duration: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Distance (km)</label>
          <input
            type="number"
            value={updatedActivity.distance}
            onChange={(e) =>
              setUpdatedActivity({
                ...updatedActivity,
                distance: e.target.value,
              })
            }
          />
        </div>
        <button type="button" onClick={handleEdit}>
          Edit Workout
        </button>
      </form>
    </div>
  );
};

export default EditWorkout;
