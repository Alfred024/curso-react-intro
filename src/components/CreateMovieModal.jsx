import React from "react";

function CreateMovieModal({setOpenModal}) {
    const [movieName, setMovieName] = React.useState('');
    const [movieYear, setMovieYear] = React.useState('');
    const [moviePoster, setMoviePoster] = React.useState('');

    function createMovieButton() {
        const movies = localStorage.getItem('favsMovies');
        const moviesParsed = JSON.parse(movies);
        
        const newMovie = {
            Title: movieName,
            Type:"movie",
            Year: movieYear,
            Poster: moviePoster
        }

        
        moviesParsed.push(newMovie);
        const movieString = JSON.stringify(moviesParsed);
        console.log(movieString);
        //localStorage.setItem('favsMovies', movieString)
    }

    return (
        <form onSubmit={(event) =>{ event.preventDefault();}}>
          <label className="labelTitle">Añade una película</label>
          
          <input 
            onChange={(event)=>{setMovieName(event.target.value)}}
            placeholder="Nombre de la película"
            type="text" />
          <input 
            onChange={(event)=>{setMovieYear(event.target.value)}}
            placeholder="Año de lanzamiento"
            type="number" />
          <input 
            onChange={(event)=>{setMoviePoster(event.target.value)}}
            placeholder="Url del poster"
            type="url" />

          <div className="TodoForm-buttonContainer">
            <button
              onClick={() =>{ setOpenModal(false)}}
              type="button"
              className="TodoForm-button TodoForm-button--cancel"
              
            >Cancelar</button>
            <button
              onClick={() =>{
                createMovieButton();
              }}
              type="submit"
              className="TodoForm-button TodoForm-button--add"
            >Añadir</button>
          </div>
        </form>
    );
}

export {CreateMovieModal};