import { useState } from "react"
import Footer from "./components/Footer"
import Body from "./components/Body"
import Header from "./components/Header"
import { searchMovies, searchSeries } from './utils/fetch'


function App() {
  const [movies, setMovies] = useState([])
  const [filtro, setFiltro] = useState('All')


  function handleSearch(query) {
    Promise.all([searchMovies(query), searchSeries(query)])
      .then(([films, series]) => {
        console.log( series[0]);
        
        const filmsNormalizzati = films.map(f => ({ ...f, type: 'Film' }))
        const serieNormalizzate = series.map(s => ({ ...s, 
          title: s.name,
          original_title: s.original_name,
          type: 'Serie'}))
        setMovies([...filmsNormalizzati, ...serieNormalizzate])
      })
      .catch(err => console.error(err))
  }

  const MoviesFilter = movies.filter(movie => {
    if(filtro === 'All') {
      return true 
    } else if (filtro === 'film') {
      return movie.type === 'Film' 
    } else if (filtro === 'series') {
      return movie.type === 'Serie'
    }
  })


  return (
    <>
      <Header onSearch={handleSearch} setFiltro={setFiltro} />
      <Body movies={MoviesFilter} />
      <Footer />
    </>
  )
}

export default App
