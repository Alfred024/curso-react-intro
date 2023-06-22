import logo from './platzi.webp';
import React from 'react';
import { AddFavButton } from './AddFavButton';
import { SearchMovie } from './SearchMovie';
import { BackButton } from "./BackButton";
import { NextButton } from './NextButton';
import { ShowFavsButton } from './ShowFavsButton';
import { MovieCard } from './MovieCard';
import './App.css';


const movieDefault = [
  {
    Title: "Here would be the movie title",
    Year: 0,
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
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
  const [movieList, setMovieList] = React.useState(movieDefault);
  const [movieSearch, setMovieSearch] = React.useState('');
  const [indexCard, setIndexCard] = React.useState(0);

  return (
    <React.Fragment>
      <SearchMovie
        movie={movieSearch}
        setMovie={setMovieSearch}
        setMovieList={setMovieList}
      />

        <div className='movieCardContainer'>
          <BackButton
            index = {indexCard}
            newIndex = {setIndexCard}
          />
          <MovieCard
            title = {movieList[indexCard].Title}
            year = {movieList[indexCard].Year}
            poster = {movieList[indexCard].Poster}
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
