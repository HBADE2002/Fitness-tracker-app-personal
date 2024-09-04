// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import HealthMetricsComponent from "./HealthMetricsComponent";

function PersonalInfoSignup() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="info-body-container">
      <div>
        <h1>Personal Information</h1>
      </div>
      <div>
        <form className="personalInfo-input-container">
          <label htmlFor="name">Full Name:</label>
          <input
            className="input-container"
            type="text"
            id="name"
            name="name"
            value={personalInfo.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="name">Age:</label>
          <input
            className="input-container"
            type="number"
            id="age"
            name="age"
            value={personalInfo.age}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="name">Weight (kg):</label>
          <input
            className="input-container"
            type="number"
            id="weight"
            name="weight"
            value={personalInfo.weight}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="name">Height (cm):</label>
          <input
            className="input-container"
            type="number"
            id="height"
            name="height"
            value={personalInfo.height}
            onChange={handleInputChange}
            required
          />
        </form>
      </div>

      <HealthMetricsComponent weight={Number(personalInfo.weight)}>
        height = {Number(personalInfo.height)}
      </HealthMetricsComponent>
    </div>
  );
}

export default PersonalInfoSignup;
