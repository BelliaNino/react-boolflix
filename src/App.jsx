import { useState } from "react"
import Footer from "./components/Footer"
import Body from "./components/Body"
import Header from "./components/Header"
import { searchMovies } from './utils/fetch'


function App() {
  const [movies, setMovies] = useState([])


  function handleSearch(query) {
    searchMovies(query)
      .then(results => setMovies(results))
      .catch(err => console.error(err))
  }

  

  return (
    <>
    <Header onSearch={handleSearch}/>
    <Body movies={movies} />
    <Footer/>  
    </>
  )
}

export default App
