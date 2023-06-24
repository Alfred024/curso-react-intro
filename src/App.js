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

let favMoviesList = [
  {
    Title: "Here would be your favourites movie list",
    Year: 0,
    Poster: "https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

function App() {
  

  const [favs, setFavs] = React.useState(() =>{
    const favMoviesListSaved = localStorage.getItem('favsMovies');
    if(favMoviesListSaved){
      return favMoviesListSaved;
    }else{
      return '[]';
    }
  });
  localStorage.setItem('favsMovies', favs);
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
              favs={favs}
              setFavs={setFavs}
            />
            <ShowFavsButton
              favMoviesSaved = {localStorage.getItem('favsMovies')}
              setMovieList = {setMovieList}
            />
          </div>
          
        </div>

    </React.Fragment>
  );
}

export default App;
