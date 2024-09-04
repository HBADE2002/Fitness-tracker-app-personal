// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import HealthMetricsComponent from "./HealthMetricsComponent";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function PersonalInfoSignup() {
  const [showHealthMetrics, setShowHealthMetrics] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    age: "",
    sex: "",
    weight: "",
    height: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowHealthMetrics(true);
  };

  return (
    <div className="info-body-container">
      <div>
        <h1>Personal Information</h1>
      </div>
      <div>
        <Form className="personalInfo-input-container" onSubmit={handleSubmit}>
          <Form.Label htmlFor="name">Full Name:</Form.Label>
          <input
            className="input-container"
            type="text"
            id="name"
            name="name"
            value={personalInfo.name}
            onChange={handleInputChange}
            required
          />
          <Form.Label htmlFor="name">Age:</Form.Label>
          <input
            className="input-container"
            type="number"
            id="age"
            name="age"
            value={personalInfo.age}
            onChange={handleInputChange}
            required
          />
          
          <Form.Group>
            <Form.Label>Sex:</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="Male"
                name="sex"
                id="sexMale"
                value="Male"
                checked={personalInfo.sex === "Male"}
                onChange={handleInputChange}
                required
              />
              <Form.Check
                type="radio"
                label="Female"
                name="sex"
                id="sexFemale"
                value="Female"
                checked={personalInfo.sex === "Female"}
                onChange={handleInputChange}
                required
              />
              <Form.Check
                type="radio"
                label="Other"
                name="sex"
                id="sexOther"
                value="Other"
                checked={personalInfo.sex === "Other"}
                onChange={handleInputChange}
                required
              />
            </div>
          </Form.Group>
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
          <Form.Label htmlFor="name">Height (cm):</Form.Label>
          <input
            className="input-container"
            type="number"
            id="height"
            name="height"
            value={personalInfo.height}
            onChange={handleInputChange}
            required
          />
          <div>
            <Button type="submit">Calculate my Health Metrics</Button>
          </div>
        </Form>
      </div>

      {showHealthMetrics && (
        <HealthMetricsComponent
          weight={Number(personalInfo.weight)}
          height={Number(personalInfo.height)}
        ></HealthMetricsComponent>
      )}
    </div>
  );
}

export default PersonalInfoSignup;
