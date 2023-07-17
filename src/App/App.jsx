import React from 'react';
import { SearchMovie } from '../components/SearchMovie';
import { BackButton } from '../components/BackButton';
import { MovieCard } from '../components/MovieCard';
import { NextButton } from '../components/NextButton';
import { DeleteFavButton } from '../components/DeleteFavButton';
import { CreateMovieButton } from '../components/CreateMovieButton';

function App() {

  //useLocalFavouriteMovies --> custom hook que acceda al localSotarge para mostrar las películas guardadas
    //retorna un estado con las pelícuas y una función para actualizarlas
  const [movies, setMovies] = React.useState([]);

  //useCurrentIndex/o declarar un estado global 
  //useOpenModal --> consume un estado 

  return (
      <>
        <SearchMovie
          setMovies = {setMovies}
        />
         
        <div className='movieCardContainer' >
          <BackButton
            currenIndex = {0}
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
            currenIndex = {0}
          />
        </div>

        <div className='buttonsContainer'>
          <DeleteFavButton
            currenIndex = {0}
          />
          <AddFavButton
            currenIndex = {0}
          />
          <ShowFavsButton
            setMovies = {setMovies}
          />
        </div>

        {/* Tal vez sería bueno que este componente contuviera al Modal, de esta forma podríamos tener un estado local del componente y manejar el render del modal sin declarar variables externas */}
        <div className='createMovieContainer'>
            <CreateMovieButton
              setOpenModal={setOpenModal}/>
        </div>

        {/* Este componente va a contener el modal */}
        <div className='createMovieContainer'>
          <CreateMovieButton/>
        </div>
                
      </>
  );
}


export {App};
