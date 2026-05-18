const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export function searchMovies(selectedMovie) {
  return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=it-IT&query=${selectedMovie}`)
    .then(res => res.json())
    .then(data => data.results)
}