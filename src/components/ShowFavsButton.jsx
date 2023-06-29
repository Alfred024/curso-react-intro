import React from "react";

function ShowFavsButton({favMoviesSaved, setMovieList, show,setShow}) {

    function displayFavMovies() {
        const moviesSaved = JSON.parse(favMoviesSaved);
        setMovieList(moviesSaved);
    }

    return(
        <button 
            onClick={() =>{
                displayFavMovies();
                setShow(!show);
            }}
            className="changeButton">
            Show favs
        </button>
    );
}

export {ShowFavsButton};