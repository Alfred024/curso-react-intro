import React from 'react';
import { AppUI } from './AppUI';


const movieDefault = [
  {
    Title: "Here would be the movie title",
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
  const [indexCard, setIndexCard] = React.useState(0);
  const [buttonView, setButtonView] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  
  return (
    <AppUI
      movieList = {movieList}
      setMovieList = {setMovieList}
      loading = {loading}
      setLoading = {setLoading}
      indexCard = {indexCard}
      setIndexCard = {setIndexCard}
      favMovies = {favs} 
      setFavMovies = {setFavs}
      show = {buttonView}
      setShow = {setButtonView}
    />
  );
}

export {App};
