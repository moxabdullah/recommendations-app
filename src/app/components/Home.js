import React, { useState } from "react"

export default function Home() {
  const [favoriteMovie, setFavoriteMovie] = useState("")
  const [preferredGenre, setPreferredGenre] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Submitted:", { favoriteMovie, preferredGenre })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105">
        <h1 className="text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Movie Maestro
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="favorite-movie" className="block text-gray-300">
              Favorite Movie
            </label>
            <input
              id="favorite-movie"
              type="text"
              placeholder="Enter your favorite movie"
              value={favoriteMovie}
              onChange={(e) => setFavoriteMovie(e.target.value)}
              required
              className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="preferred-genre" className="block text-gray-300">
              Preferred Genre
            </label>
            <input
              id="preferred-genre"
              type="text"
              placeholder="Enter your preferred genre"
              value={preferredGenre}
              onChange={(e) => setPreferredGenre(e.target.value)}
              required
              className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500"
          >
            Get Recommendations
          </button>
        </form>
      </div>
    </div>
  )
}