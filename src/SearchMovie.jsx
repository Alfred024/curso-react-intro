import React from "react";

function SearchMovie({movie, setMovie}) {
    // const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '532d0c1310msh988dee28f976e8ep12bc49jsn1b74a5f379a5',
    //         'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    //     }
    // };

    // async function searchMovie() {
    //     try {
    //         const response = await fetch(url, options);
    //         const result = await response.text();
    //         console.log(result);
    //     } catch (error) {
    //         console.error('Error while consuming API of movies: '+error);
    //     }
    // }

    return(
        <div className="searchMovieContainer">
            <input 
                onChange={(typing) => {
                    let inputVal = typing.target.value;
                    setMovie(inputVal);
                }} 
                placeholder="Search a movie  by title"></input>
            <button class="fa-solid fa-magnifying-glass"></button>
        </div>
    );
}

export {SearchMovie}