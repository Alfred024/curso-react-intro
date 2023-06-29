import React from 'react';
import { AddFavButton } from '../components/AddFavButton';
import { SearchMovie } from '../components/SearchMovie';
import { BackButton } from "../components/BackButton";
import { NextButton } from '../components/NextButton';
import { ShowFavsButton } from '../components/ShowFavsButton';
import { MovieCard } from '../components/MovieCard';
import { MovieCardLoading } from '../components/MovieCardLoading';
import { DeleteFavButton } from '../components/DeleteFavButton';


function AppUI({
    movieList,
    setMovieList,
    loading,
    setLoading,
    indexCard,
    setIndexCard,
    favMovies, 
    setFavMovies,
    show,
    setShow
}) {
    return (
        <React.Fragment>
          <SearchMovie
            setLoading={setLoading}
            setMovieList={setMovieList}
          />
    
          <div className='movieCardContainer'>
            <BackButton
              index = {indexCard}
              newIndex = {setIndexCard}
              listLength = {movieList.length}
            />
            {!loading ? (
              <MovieCard
                title = {movieList[indexCard].Title}
                year = {movieList[indexCard].Year}
                poster = {movieList[indexCard].Poster}
              />
            ):(
              <MovieCardLoading/>
            )}
            
            <NextButton
              index = {indexCard}
              newIndex = {setIndexCard}
              listLength = {movieList.length}
            />
            <div className='buttonContainer'>
              <DeleteFavButton
                movieIndex={indexCard}
                favs={favMovies}
                setFavs={setFavMovies}
                show={show}
              />
              <AddFavButton
                movie={movieList[indexCard]}
                favs={favMovies}
                setFavs={setFavMovies}
                show={show}
              />
              <ShowFavsButton
                favMoviesSaved = {localStorage.getItem('favsMovies')}
                setMovieList = {setMovieList}
                setShow={setShow}
              />
            </div>
          </div>

        </React.Fragment>
      );
}

export {AppUI};