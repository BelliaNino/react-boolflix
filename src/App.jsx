import { useState } from "react"
import Footer from "./components/Footer"
import Body from "./components/Body"
import Header from "./components/Header"
import { searchMovies, searchSeries } from './utils/fetch'


function App() {
  const [movies, setMovies] = useState([])


  function handleSearch(query) {
    Promise.all([searchMovies(query), searchSeries(query)])
      .then(([films, series]) => {
        console.log( series[0]);
        
        const filmsNormalizzati = films.map(f => ({ ...f, type: 'Film' }))
        const serieNormalizzate = series.map(s => ({ ...s, type: 'Serie'}))
        setMovies([...filmsNormalizzati, ...serieNormalizzate])
      })
      .catch(err => console.error(err))
  }



  return (
    <>
      <Header onSearch={handleSearch} />
      <Body movies={movies} />
      <Footer />
    </>
  )
}

export default App
