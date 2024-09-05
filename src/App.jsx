/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import ActivityPage from "./pages/ActivityPage";
import Navbar from "./components/NavBar";
import PersonalInfoSignup from "./pages/PersonalInfoSignup";
import About from "./pages/About";
import GoalSetting from "./pages/GoalSetting";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/personal-info-page" element={<PersonalInfoSignup />} />
        <Route path="/activity-page" element={<ActivityPage />} />
        <Route path="/about-page" element={<About />} />
        <Route path="/goal-setting-page" element={<GoalSetting />} /> 
      </Routes>
      
    </div>
  );
}

export default App;
