// import React from 'react';
import "./App.css";
import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import PersonalInfoSignup from "./components/PersonalInfoSignup";
import TrackExercise from "./components/TrackExercise";
import About from './components/About';

function App() {
  console.log("Hello World!");
  return (
    <>
      <h1 className="font-text">Josh - The Fitness App</h1>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<PersonalInfoSignup />} />
        <Route exact path="/track-exercise" element={<TrackExercise />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      
      
    </>
  );
}

export default App;