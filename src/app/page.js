"use client";

import React, { useState } from "react";
import Home from "./components/Home";
import MovieCard from "./components/MovieCard";
import Questionnaire from "./components/Questionnaire";

export default function Main() {
  const [currentStep, setCurrentStep] = useState("home");
  const [movieRecommendation, setMovieRecommendation] = useState(null);

  const handleHomeSubmit = (data) => {
    console.log("Home data: ", data);
    setCurrentStep("questionnaire");
  }

  const handleQuestionnaireSubmit = (data) => {
    console.log("Questionnaire data: ", data);
    // make API call
    setCurrentStep("movieCard");
  }

  const handleNextMovie = () => {
    // fetch next movie recommendation
  }

  return (
    <>
    {currentStep === "home" && <Home onSubmit={handleHomeSubmit} />}
    {currentStep === "questionnaire" && (
      <Questionnaire onSubmit={handleQuestionnaireSubmit} />
    )}
    {currentStep === "movieCard" && (
      <MovieCard movie={movieRecommendation} onNextMovie={handleNextMovie} />
    )}
  </>
  )
}