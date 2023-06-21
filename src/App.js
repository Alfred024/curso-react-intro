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
  return (
    <React.Fragment>
      <SearchMovie/>

        <BackButton/>

        {/* Display all the movies in array */}
        {/* {movies.map(movie =>(
          <MovieCard
            title = {movie.title}
            year = {movie.year}
            poster = {movie.poster}
          />
        ))} */}

        {/* Display one movie, it would depend on the button event */}
        <MovieCard
          title = {movies[0].title}
          year = {movies[0].year}
          poster = {movies[0].poster}
        />
        <NextButton/>
        <AddFavButton/>
      
      <ShowFavsButton/>
    </React.Fragment>
  );
}

export default App;
