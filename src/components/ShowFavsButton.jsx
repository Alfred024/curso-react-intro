import React from "react";

function ShowFavsButton({favMoviesSaved, setMovieList, setShow}) {

    function displayFavMovies() {
        const moviesSaved = JSON.parse(favMoviesSaved);
        setMovieList(moviesSaved);
    }

    return(
        <button 
            onClick={() =>{
                displayFavMovies();
                setShow(1);
            }}
            className="changeButton">
            Show favs
        </button>
    );
}

export {ShowFavsButton};