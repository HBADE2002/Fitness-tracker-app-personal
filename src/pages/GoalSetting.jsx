// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import AddGoal from "../components/GoalSetting-components/AddGoal";
import UpdateGoal from "../components/GoalSetting-components/UpdateGoal";
import DeleteGoal from "../components/GoalSetting-components/DeleteGoal";

const GoalSetting = () => {
  // Access the goals array from the state
  const goals = useSelector((state) => state.goalSlice.goals); 
  const [selectedGoal, setSelectedGoal] = useState(null);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Goal Setting</h2>

      {/* Add New Goal */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Create New Goal</h3>
        <AddGoal />
      </div>

      {/* Display Existing Goals */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Existing Goals</h3>
        {goals && goals.length > 0 ? (
          goals.map((goal) => (
            <div key={goal.id} className="border p-4 mb-4 rounded">
              <h4 className="font-bold">{goal.goalType}</h4>
              <p>
                Current: {goal.currentValue} {goal.unit}
              </p>
              <p>
                Target: {goal.targetValue} {goal.unit}
              </p>
              <p>Deadline: {goal.deadline}</p>
              <div className="mt-2 space-x-2">
                <Button onClick={() => setSelectedGoal(goal)} variant="primary">
                  Edit
                </Button>
                <DeleteGoal goalId={goal.id} />
              </div>
            </div>
          ))
        ) : (
          <p>No goals have been set yet.</p>
        )}
      </div>

      {/* Show the UpdateGoal form if a goal is selected */}
      {selectedGoal && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Update Goal</h3>
          <UpdateGoal goal={selectedGoal} />
          <Button
            onClick={() => setSelectedGoal(null)} // Cancel edit
            className="mt-2"
            variant="secondary"
          >
            Cancel Edit
          </Button>
        </div>
      )}
    </div>
  );
};

export default GoalSetting;
