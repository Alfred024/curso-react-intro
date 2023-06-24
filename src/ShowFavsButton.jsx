import React from "react";

function ShowFavsButton({favMoviesSaved, setMovieList}) {

    function displayFavMovies() {
        const moviesSaved = JSON.parse(favMoviesSaved);
        setMovieList(moviesSaved);
    }

    return(
        <button 
            onClick={() =>{
                displayFavMovies();
            }}
            className="changeButton">
            Show favs
        </button>
    );
}

export {ShowFavsButton};