import React from "react";
import { useMoviesAPI } from "../utils/useMoviesAPI";

//Aún no sé si esto funciona, mi duda está en si volverá a ejecutar el customHook una vezcambiando el estado de movieTyped
function SearchMovie({setMovies}) {
    const [movieTyped, setMovieTyped] = React.useState('');
    const [movies] = useMoviesAPI(movieTyped);
    
    return(
        <div className="searchMovieContainer">
            <input 
                value={movieTyped}
                onChange={(typing) => {
                    const inputVal = typing.target.value;
                    setMovieTyped(inputVal);
                }} 
                placeholder="Search a movie  by title"></input>
            <button 
                id="searchButton"
                onClick={() =>{
                    setMovies(movies);
                }}
                className="fa-solid fa-magnifying-glass"/>
        </div>
    );
}

export {SearchMovie}