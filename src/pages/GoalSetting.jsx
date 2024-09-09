/* eslint-disable no-unused-vars */
// GoalSetting.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import AddGoal from "../components/GoalSetting-components/AddGoal";
import DeleteGoal from "../components/GoalSetting-components/DeleteGoal";

const GoalSetting = () => {
  // Use the useSelector hook to get the goals array from the Redux store
  const goals = useSelector((state) => state.goalSlice.goals);

  // Use the useState hook to manage the selectedGoal state variable
  const [selectedGoal, setSelectedGoal] = useState(null);

  // Define a function to handle the completion of a goal deletion
  const handleDeleteComplete = () => {
    // Clear the selectedGoal state variable after a goal is deleted
    setSelectedGoal(null);
  };

  // Render the GoalSetting component
  return (
    <div className="space-y-8 goal-setting-container">
      <h2 className="text-2xl font-bold">Goal Setting</h2>

      {/* Add/Edit Goal Form */}
      <div>
        {/* Dynamically render the form title based on whether a goal is selected */}
        <h3 className="text-xl font-semibold mb-4">
          {selectedGoal ? "Edit Goal" : "Create New Goal"}
        </h3>
        {/* Render the AddGoal component and pass the selectedGoal and onCancel props */}
        <AddGoal
          initialGoal={selectedGoal}
          onCancel={() => setSelectedGoal(null)}
        />
      </div>

      {/* Display Existing Goals */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Existing Goals</h3>
        {/* Check if there are any goals in the goals array */}
        {goals && goals.length > 0 ? (
          // If there are goals, map over the goals array and render a div for each goal
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
                {/* Render a button to edit the goal */}
                <Button onClick={() => setSelectedGoal(goal)} variant="primary">
                  Edit
                </Button>
                {/* Render the DeleteGoal component and pass the goalId and onDeleteComplete props */}
                <DeleteGoal goalId={goal.id} onDeleteComplete={handleDeleteComplete} />
              </div>
            </div>
          ))
        ) : (
          // If there are no goals, render a message
          <p>No goals have been set yet.</p>
        )}
      </div>
    </div>
  );
};

export default GoalSetting;