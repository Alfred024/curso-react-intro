import React from "react";

//MovieCard Component
import { MovieCard } from './MovieCard';

//Buttons Components
import { BackButton } from './BackButton';
import { NextButton } from './NextButton';
import { DeleteFavButton } from './DeleteFavButton';
import { AddFavButton } from './AddFavButton';
import { ShowFavsButton } from './ShowFavsButton';

function MoviesCardContainer({movies}) {
  const [cardIndex, setIndexCard] = React.useState(0);
  
  return(
    <>
        <div className='movieCardContainer' >
          <BackButton
            indexCard = {cardIndex}
            setIndexCard = {setIndexCard}
            listLength = {movies.length}
          />
          {
            movies.map(movieItem =>{
              <MovieCard
                title = {movieItem[cardIndex].Title}
                year = {movieItem[cardIndex].Year}
                poster = {movieItem[cardIndex].Poster}
              />
            })
          }
          <NextButton
            indexCard = {cardIndex}
            setIndexCard = {setIndexCard}
            listLength = {movies.length}
          />
        </div>

        
        <div className='buttonsContainer'>
          <DeleteFavButton
            setMovies = {setMovies}
            setIndexCard = {setIndexCard}
          />
          <AddFavButton
            setMovies = {setMovies}
            setIndexCard = {setIndexCard}
          />
          <ShowFavsButton
            setMovies = {setMovies}
            setIndexCard={setIndexCard}
          />
        </div>

    </>
  );
}

export {MoviesCardContainer};