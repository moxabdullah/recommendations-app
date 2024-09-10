import React, { useState } from "react"

export default function Questionnaire() {
  const [favoriteMovie, setFavoriteMovie] = useState("")
  const [movieType, setMovieType] = useState("")
  const [mood, setMood] = useState("")
  const [filmPerson, setFilmPerson] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted:", { favoriteMovie, movieType, mood, filmPerson })
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow-2xl">
        <h1 className="text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Movie Maestro
        </h1>
        <div className="text-center mb-6">
          <span className="text-4xl">🍿</span>
          <p className="text-white text-2xl font-bold mt-2">1</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="favorite-movie" className="block text-gray-300">
              What's your favorite movie and why?
            </label>
            <textarea
              id="favorite-movie"
              value={favoriteMovie}
              onChange={(e) => setFavoriteMovie(e.target.value)}
              required
              className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              rows="3"
              placeholder="The Shawshank Redemption Because it taught me to never give up hope no matter how hard life gets"
            />
          </div>
          <div className="space-y-2">
            <p className="text-gray-300">Are you in the mood for something new or a classic?</p>
            <div className="flex space-x-4">
              {["New", "Classic"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setMovieType(type)}
                  className={`flex-1 py-2 rounded-md transition-all duration-300 ${
                    movieType === type
                      ? "bg-purple-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-300">What are you in the mood for?</p>
            <div className="grid grid-cols-2 gap-4">
              {["Fun", "Serious", "Inspiring", "Scary"].map((moodType) => (
                <button
                  key={moodType}
                  type="button"
                  onClick={() => setMood(moodType)}
                  className={`py-2 rounded-md transition-all duration-300 ${
                    mood === moodType
                      ? "bg-purple-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {moodType}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="film-person" className="block text-gray-300">
              Which famous film person would you love to be stranded on an island with and why?
            </label>
            <textarea
              id="film-person"
              value={filmPerson}
              onChange={(e) => setFilmPerson(e.target.value)}
              required
              className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              rows="3"
              placeholder="Tom Hanks because he is really funny and can do the voice of Woody"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500"
          >
            Next Person
          </button>
        </form>
      </div>
    </div>
  )
}