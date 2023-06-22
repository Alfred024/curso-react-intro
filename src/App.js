import logo from './platzi.webp';
import React from 'react';
import { AddFavButton } from './AddFavButton';
import { SearchMovie } from './SearchMovie';
import { BackButton } from "./BackButton";
import { NextButton } from './NextButton';
import { ShowFavsButton } from './ShowFavsButton';
import { MovieCard } from './MovieCard';
import './App.css';


const movies = [
  {
    title: "Endgame",
    year: 2019,
    poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  },
  {
    title: "Shrek",
    year: 2002,
    poster: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  }
];

//esto debe almacenarce en el local storage
const favMovies = [
  {
    title: "Shrek",
    year: 2002,
    poster: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    title: "Shrek",
    year: 2002,
    poster: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  }
];

function App() {
  // const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
  // const options = {
  //     method: 'GET',
  //     headers: {
  //         'X-RapidAPI-Key': '532d0c1310msh988dee28f976e8ep12bc49jsn1b74a5f379a5',
  //         'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  //     }
  // };

  // async function searchMovie() {
  //     try {
  //         const response = await fetch(url, options);
  //         const data = await response.json();
  //         movies.push(data[0]);
  //     } catch (error) {
  //         console.error('Error while consuming API of movies: '+error);
  //     }
  // }

  const [movie, setMovie] = React.useState(movies);
  const [movieSearch, setMovieSearch] = React.useState('');
  const [indexCard, setIndexCard] = React.useState(0);

  return (
    <React.Fragment>
      <SearchMovie
        movie={movieSearch}
        setMovie={setMovieSearch}
      />

        <div className='movieCardContainer'>
          <BackButton
            index = {indexCard}
            newIndex = {setIndexCard}
          />
          <MovieCard
            title = {movies[indexCard].title}
            year = {movies[indexCard].year}
            poster = {movies[indexCard].poster}
          />
          <NextButton
            index = {indexCard}
            newIndex = {setIndexCard}
          />
          <div className='buttonContainer'>
            <AddFavButton/>
            <ShowFavsButton/>
          </div>
          
        </div>

    </React.Fragment>
  );
}

export default App;
