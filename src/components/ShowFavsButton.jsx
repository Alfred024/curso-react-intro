import React from "react";
import { useMoviesStoraged } from "../utils/useMoviesStoraged";

function ShowFavsButton({setMovies, setIndexCard}) {
    let [moviesStoraged] = useMoviesStoraged();

    function displayFavMovies() {
        setIndexCard(0);
        setMovies(moviesStoraged);
    }

    return(
        <button 
            onClick={() =>{
                displayFavMovies();
            }}
            className={`changeButton ${show===1 && "hideItem"}`}>
            Show favs
        </button>
    );
}

export {ShowFavsButton};
