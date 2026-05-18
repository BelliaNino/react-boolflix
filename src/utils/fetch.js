const API_KEY = import.meta.env.VITE_API_KEY
const CONTENT_URL = 'https://api.themoviedb.org/3'

export function searchMovies(query) {
  return fetch(`${CONTENT_URL}/search/movie?api_key=${API_KEY}&language=it-IT&query=${query}`)
    .then(res => res.json())
    .then(data => data.results)
}

export function searchSeries(query) {
  return fetch(`${CONTENT_URL}/search/tv?api_key=${API_KEY}&language=it-IT&query=${query}`)
    .then(res => res.json())
    .then(data => data.results)
}