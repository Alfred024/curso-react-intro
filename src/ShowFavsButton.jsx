import React from "react";

function ShowFavsButton({setMovieList}) {

    function displayFavMovies() {
        const moviesSaved = localStorage.getItem("favsMovies");
        //const movies = [JSON.parse(moviesSaved)];
        console.log(moviesSaved);
        //setMovieList(movies);
    }

    return(
        <button 
            onClick={() =>{
                console.log('Las favoritas');
                displayFavMovies();
            }}
            className="changeButton">
            Show favs
        </button>
    );
}

export {ShowFavsButton};