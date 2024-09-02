// eslint-disable-next-line no-unused-vars
import React from "react";

function PersonalInfoSignup() {
  return (
    <div className="info-body-container">
      <div>
        <h1>Personal Information</h1>
      </div>
      <div >
      <form className="personalInfo-input-container">
        <label  htmlFor="name">Full Name:</label>
        <input className="input-container" type="text" id="name" name="name" required />
        <label htmlFor="name">Age:</label>
        <input className="input-container" type="number" id="age" name="age" required />
        <label htmlFor="name">Weight (kg):</label>
        <input className="input-container"type="number" id="weight" name="weight" required />
        <label htmlFor="name">Height (ft):</label>
        <input className="input-container" type="number" id="height" name="height" required />
      </form>
      </div>
      
    </div>
  );
}

export default PersonalInfoSignup;
