import React from 'react'
import {flag} from '../utils/flags'

function Body({ movies }) {
  return (
    <div className="container py-4">
      <div className="row g-3">
        {movies.map(movie => (
          <div className="col-6 col-md-3" key={movie.id}>
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h6>{movie.title}</h6>
                <p className="small m-0">{flag[movie.original_language] || movie.original_language}</p>
                <p className="small m-0">⭐ {movie.vote_average} {movie.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Body