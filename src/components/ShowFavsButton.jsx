import React from "react";

function ShowFavsButton({favMoviesSaved, setMovieList, show, setShow, setIndex}) {

    function displayFavMovies() {
        const moviesSaved = JSON.parse(favMoviesSaved);
        setMovieList(moviesSaved);
    }

    return(
        <button 
            onClick={() =>{
                setIndex(0);
                displayFavMovies();
                setShow(1);
            }}
            className={`changeButton ${show===1 && "hideItem"}`}>
            Show favs
        </button>
    );
}

export {ShowFavsButton};
