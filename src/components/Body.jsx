import React from 'react'
import { flag } from '../utils/flags'

function Body({ movies }) {
  return (

    <section className="backg">

      <div className="container py-4">
        <div className="row g-2"> 
          {movies.map(movie => (
            <div className="col-6 col-md-3" key={movie.id}>
              <div className="card-netflix">

                {/*immagine fissa*/}
                <img
                  src={movie.poster_path
                    //se img è disponibile lascio che si veda sennò metto un url placeholder
                    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                    : 'https://placehold.co/300x450?text=No+Image'}
                  alt={movie.title}
                />
                {/*dettagli card solo con hover*/}
                <div className="card-overlay text-white">
                  <h6 className="m-0 mb-1">{movie.title}</h6>
                  <p className="m-0 small">
                    //se la sigla non corrisponde a nessuna costante allora lascio che appaia la sigla della nazione
                    {flag[movie.original_language] || movie.original_language}
                  </p>
                  <p className="m-0 text-warning small">
                    {'⭐'.repeat(Math.ceil(movie.vote_average / 2))}
                    {'☆'.repeat(5 - Math.ceil(movie.vote_average / 2))}
                  </p>
                  <span className={`badge mt-1`}>
                    {movie.type}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Body