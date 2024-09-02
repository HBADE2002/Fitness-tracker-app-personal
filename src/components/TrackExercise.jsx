// eslint-disable-next-line no-unused-vars
import React from "react";

function TrackExercise() {
  return (
    <div className="info-body-container">
      <div>
        <h1>Track Exercise</h1>
      </div>
      <div >
      <form className="personalInfo-input-container">
        <label  htmlFor="steps">Number of Daily Steps: </label>
        <input className="input-container" type="number" id="steps" name="steps" required />
        <label htmlFor="push-ups">Number of Push-Ups made: </label>
        <input className="input-container" type="number" id="push-ups" name="push-ups" required />
        <label htmlFor="sit-ups">Number of Sit-Ups made:</label>
        <input className="input-container"type="number" id="sit-ups" name="sit-ups" required />
        <label htmlFor="amount-weights">Amount of Weights lifted:</label>
        <input className="input-container"type="number" id="amount-weights" name="amount-weights" required />
        <label htmlFor="calories">Number of Calories Burned:</label>
        <input className="input-container"type="number" id="calories" name="calories" required />
        <label htmlFor="time-of-exercise">Duration of Exercise</label>
        <input className="input-container" type="number" id="time-of-exercise" name="time-of-exercise" required />
      </form>
      </div>
      
    </div>
  );
}

export default TrackExercise;
