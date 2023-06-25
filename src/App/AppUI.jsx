import React from 'react';
import { AddFavButton } from '../components/AddFavButton';
import { SearchMovie } from '../components/SearchMovie';
import { BackButton } from "../components/BackButton";
import { NextButton } from '../components/NextButton';
import { ShowFavsButton } from '../components/ShowFavsButton';
import { MovieCard } from '../components/MovieCard';


function AppUI({
    movieTyped, 
    setMovieTyped,
    movieList,
    setMovieList,
    indexCard,
    setIndexCard,
    favMovies, 
    setFavMovies
}) {
    return (
        <React.Fragment>
          <SearchMovie
            movie={movieTyped}
            setMovie={setMovieTyped}
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
                favs={favMovies}
                setFavs={setFavMovies}
              />
              <ShowFavsButton
                favMoviesSaved = {localStorage.getItem('favsMovies')}
              //   favMoviesSaved = {favMovies}
                setMovieList = {setMovieList}
              />
            </div>
          </div>

        </React.Fragment>
      );
}

export {AppUI};