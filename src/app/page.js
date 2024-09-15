"use client";

import React, { useState } from "react";
import Home from "./components/Home";
import MovieCard from "./components/MovieCard";
import Questionnaire from "./components/Questionnaire";
import UserQuery from "./components/UserQuery";
import { main as chatCompletionMain } from "./backend/lib/services/chatCompletion"

export default function Main() {
  const [currentStep, setCurrentStep] = useState("home");
  const [homeFormData, setHomeFormData] = useState({});
  const [questFormData, setQuestFormData] = useState({});
  const [aiResponse, setAiResponse] = useState(null)

  const query = `
  Give me a movie reccomendation bsed on my answer for the following questions: 
  How much time do you have? ${homeFormData.movieLength}, 
  What's your preferred genre? ${homeFormData.preferredGenre}, 
  What's your favorite movie and why? ${questFormData.favoriteMovie}, 
  Are you in the mood for something new or classic? ${questFormData.filmPerson}, 
  What are you in the mood for? ${questFormData.mood}, 
  Which famous actor would you love to be stranded on an island with and why? ${questFormData.movieType}
  `

  const getHomeFormData = (data) => {
    setHomeFormData(data)
    console.log("Home formData: ", data)
  }

  const getQuestionnaireFormData = (data) => {
    setQuestFormData(data)
    console.log("Questionnaire formData: ", data)
  }

  return (
    <>
      {currentStep === "home" && <Home
        onSubmit={() => setCurrentStep("questionnaire")}
        getChildData={getHomeFormData}
      />}
      {currentStep === "questionnaire" && <Questionnaire
        onSubmit={() => {
          setCurrentStep("movieCard")
        }}
        getChildData={getQuestionnaireFormData}
      />}
      {/* {currentStep === "movieCard" && movieRecommendation && (
        <MovieCard movie={movieRecommendation} onNextMovie={handleNextMovie} />
      )} */}
      {currentStep === "movieCard" && <UserQuery userInput={query} />}
    </>
  )
}