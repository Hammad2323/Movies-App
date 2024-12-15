
import { useEffect, useState } from 'react'
import './App.css'
import searchIcon from './assets/search.svg';
import MovieCard from './assets/MovieCard'

const API_URL="http://www.omdbapi.com/?apikey=fdbaca32";



function App() {
  
  const [movies, setMovies]=useState([]);
  const [searchTerm, setSearchTerm]=useState("");


  const searchMovie=async (title)=>{
    const response= await fetch(`${API_URL}&s=${title}`);
    const data= await response.json();

    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovie('Batman')
  },[]);
  return (
    <>
      <div className='app'>
        <h1>Movies World</h1>

        <div className='search'>
          <input placeholder='Search For Movies' 
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)} />

          <img src={searchIcon} alt='search' onClick={()=>searchMovie(searchTerm)} />
          </div>

          {movies?.length >0 ?(
            <div className='container'>
              {movies.map((movie)=>(
                <MovieCard movie={movie} />
              ))}
            </div>
          ):(
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )}

         
      </div>
    </>
  )
}

export default App
