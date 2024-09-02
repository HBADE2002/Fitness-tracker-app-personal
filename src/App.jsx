// import React from 'react';
import "./App.css";
import NavBar from "./components/NavBar";
import PersonalInfoSignup from "./components/PersonalInfoSignup";
import TrackExercise from "./components/TrackExercise";
function App() {
  console.log("Hello World!");
  return (
    <>
      <h1>Josh - The Fitness App</h1>
      <NavBar></NavBar>
      <PersonalInfoSignup></PersonalInfoSignup>
      <TrackExercise></TrackExercise>
    </>
  );
}

export default App;