import React, { useState } from "react";

const movieNotFound = [
    {
    Title: "Película no encontrada",
    Year: 0,
    Poster: "https://cdn5.vectorstock.com/i/1000x1000/73/49/404-error-page-not-found-miss-paper-with-white-vector-20577349.jpg"
    }
];

const url = 'https://movie-database-alternative.p.rapidapi.com/?s=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '532d0c1310msh988dee28f976e8ep12bc49jsn1b74a5f379a5',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
};

function SearchMovie({setLoading, setMovieList}) {

    const [consume, setConsume] = React.useState(false);
    const [movieTyped, setMovieTyped] = useState(''); 

    React.useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            consumeAPI(movieTyped);
        }, 1000);
    },[consume]);

    async function consumeAPI(movie){
        try{
            const movieConverted = fillSearch(movie);
            const response = await fetch(`${url}${movieConverted}&r=json&page=1` , options);
            const data = await response.json();
            if(data.Search){
                setMovieList(data.Search);
            }else{
                setMovieList(movieNotFound);
            }
        }catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

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
                    const inputVal = typing.target.value;
                    setMovieTyped(inputVal);
                }} 
                placeholder="Search a movie  by title"></input>
            <button 
                id="searchButton"
                onClick={() =>{
                    setConsume(!consume);
                }}
                className="fa-solid fa-magnifying-glass"/>
        </div>
    );
}

export {SearchMovie}