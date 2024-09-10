import React from "react"

export default function MovieCard({ movie, onNextMovie }) {
  if (!movie) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow-2xl">
          <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Loading...
          </h1>
          <div className="h-64 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {movie.title}
        </h1>
        <div className="relative aspect-[2/3] w-full mb-6">
          <img
            src={movie.posterUrl || '/placeholder.svg?height=450&width=300'}
            alt={`${movie.title} poster`}
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <p className="text-gray-300 text-center mb-8">
          {movie.description || "No description available."}
        </p>
        <button
          onClick={onNextMovie}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500"
        >
          Next Movie
        </button>
      </div>
    </div>
  )
}