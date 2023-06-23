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
    Poster: "https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
  const [favMvoieList, setFavMovieList] = React.useState([]);
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
            listLength = {movieList.length}
          />
          <MovieCard
            title = {movieList[indexCard].Title}
            year = {movieList[indexCard].Year}
            poster = {movieList[indexCard].Poster}
          />
          <NextButton
            index = {indexCard}
            newIndex = {setIndexCard}
            listLength = {movieList.length}
          />
          <div className='buttonContainer'>
            <AddFavButton
              movie={movieList[indexCard]}
            />
            <ShowFavsButton/>
          </div>
          
        </div>

    </React.Fragment>
  );
}

export default App;
