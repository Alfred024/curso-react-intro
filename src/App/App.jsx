import React from 'react';
//import { MoviesCardContainer } from '../components/MoviesCardContainer';

//Components
import { SearchMovie } from '../SearchMovie';
import { BackButton } from '../BackButton';
import { MovieCard } from '../MovieCard';
import { NextButton } from '../NextButton';
import { DeleteFavButton } from '../DeleteFavButton';
import { AddFavButton } from '../AddFavButton';
import { ShowFavsButton } from '../ShowFavsButton';
import { CreateMovieButton } from '../CreateMovieButton';

const movieDefault = [
  {
    Title: "Here would be the movie title",
    Year: 0,
    Poster: "https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

function App() {
  const [movies, setMovies] = React.useState(movieDefault);
  const [indexCard, setIndexCard] = React.useState(0);

  return (
      <>
        <SearchMovie
          setMovies = {setMovies}
        />

        <div className='movieCardContainer' >
          <BackButton
            indexCard = {indexCard}
            setIndexCard = {setIndexCard}
            listLength = {movies.length}
          />
          {
            movies.map(movieItem =>{
              <MovieCard
                title = {movieItem[indexCard].Title}
                year = {movieItem[indexCard].Year}
                poster = {movieItem[indexCard].Poster}
              />
            })
          }
          <NextButton
            indexCard = {indexCard}
            setIndexCard = {setIndexCard}
            listLength = {movies.length}
          />
        </div>       

        <div className='buttonsContainer'>
          <DeleteFavButton
            setMovies = {movies}
            indexCard = {indexCard}
            setIndexCard = {setIndexCard}
          />
          <AddFavButton
            movies = {movies} 
            setMovies = {setMovies} 
            indexCard = {indexCard} 
            setIndexCard = {setIndexCard}
          />
          <ShowFavsButton
            setMovies = {setMovies}
            setIndexCard={setIndexCard}
          />
        </div>

        <div className='createMovieContainer'>
            <CreateMovieButton/>
        </div>
         
      </>
  );
}


export {App};
