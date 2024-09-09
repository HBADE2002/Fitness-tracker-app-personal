/* eslint-disable no-unused-vars */
// GoalSetting.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import AddGoal from "../components/GoalSetting-components/AddGoal";
import DeleteGoal from "../components/GoalSetting-components/DeleteGoal";

const GoalSetting = () => {
  const goals = useSelector((state) => state.goalSlice.goals);
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleDeleteComplete = () => {
    // Clear the selected goal after a goal is deleted
    setSelectedGoal(null);
  };

  return (
    <div className="space-y-8 goal-setting-container">
      <h2 className="text-2xl font-bold">Goal Setting</h2>

      {/* Add/Edit Goal Form */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          {selectedGoal ? "Edit Goal" : "Create New Goal"}
        </h3>
        <AddGoal
          initialGoal={selectedGoal}
          onCancel={() => setSelectedGoal(null)}
        />
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
                <DeleteGoal goalId={goal.id} onDeleteComplete={handleDeleteComplete} />
              </div>
            </div>
          ))
        ) : (
          <p>No goals have been set yet.</p>
        )}
      </div>
    </div>
  );
};

export default GoalSetting;