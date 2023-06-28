import React, { useState } from "react";
import { useMoviesApi } from "../hooks/useMoviesApi";


function SearchMovie({setMovieList}) {
    console.log('Me renderizo');
    let inputVal;
    const [movieTyped, setMovieTyped] = useState(''); 
    const [movies, loading] = useMoviesApi(movieTyped);

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
                    console.log('Buscada: '+inputVal);
                    setMovieList(movies);
                }}
                class="fa-solid fa-magnifying-glass"></button>
        </div>
    );
}

export {SearchMovie}