import React, { useState } from "react";
import { useMoviesApi } from "../hooks/useMoviesApi";

const url = 'https://movie-database-alternative.p.rapidapi.com/?s=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '532d0c1310msh988dee28f976e8ep12bc49jsn1b74a5f379a5',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
};

function SearchMovie({setMovieList}) {
    const [movieTyped, setMovieTyped] = useState(''); 
    const movieConverted = fillSearch(movieTyped);
    const urlAdapted = `${url}${movieConverted}&r=json&page=1`;
    //const [movies, setMovies] = ([]);
    const [movies] = useMoviesApi(movieTyped);

    
    function fillSearch(movie) {
        let movieConverted = '';
        for (let index = 0; index < movie.length; index++) {
            if(movie.charAt(index) === ' '){
                movieConverted += '%20';
            }else{
                movieConverted += movie.charAt(index);
            }
        }
        return movieConverted;
    }

    return(
        <div className="searchMovieContainer">
            <input 
                value={movieTyped}
                onChange={(typing) => {
                    let inputVal = typing.target.value;
                    setMovieTyped(inputVal);
                }} 
                placeholder="Search a movie  by title"></input>
            <button 
                id="searchButton"
                onClick={() =>{
                    //setMovie(movieTyped);
                    console.log();
                    //setMovieList(movies);
                }}
                class="fa-solid fa-magnifying-glass"></button>
        </div>
    );
}

export {SearchMovie}