import React from 'react';

//Components
import { SearchMovie } from '../components/SearchMovie';
import { MoviesCardContainer } from '../components/MoviesCardContainer';
//Component that contain the modal
import { CreateMovieButton } from '../components/CreateMovieButton';

const movieDefault = [
  {
    Title: "Here would be the movie title",
    Year: 0,
    Poster: "https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

function App() {

  const [movies, setMovies] = React.useState(movieDefault);

  return (
      <>
        <SearchMovie
          setMovies = {setMovies}
        />

        <MoviesCardContainer
          movies={movies}
        />        

        <div className='createMovieContainer'>
            <CreateMovieButton/>
        </div>
         
      </>
  );
}


export {App};
