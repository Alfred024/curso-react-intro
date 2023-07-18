import React from "react";
import { useMoviesAPI } from "../utils/useMoviesAPI";

function SearchMovie({setMovies, setLoading}) {
    const [movieTyped, setMovieTyped] = React.useState('');
    const [movies, loading] = useMoviesAPI(movieTyped);
    
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
                    setLoading(loading);
                    setMovies(movies);
                }}
                className="fa-solid fa-magnifying-glass"/>
        </div>
    );
}

export {SearchMovie}