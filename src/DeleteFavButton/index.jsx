import React from "react";
import { useMoviesStoraged } from "../utils/useMoviesStoraged";

function DeleteFavButton({setMovies, indexCard, setIndexCard}) {
    let [moviesStoraged] = useMoviesStoraged();

    function deleteFavMovie() {
        setIndexCard((index) => index - 1);
        moviesStoraged.splice(indexCard, 1);
        const moviesString = JSON.stringify(moviesStoraged);
        localStorage.setItem('favsMovies', moviesString);
        setMovies(moviesStoraged);
    }
    
    return(
        <button
            className={`changeButton ${show===0 && "hideItem"}`}
            onClick={() =>{
                deleteFavMovie();
            }}
        >

            <i className="fa-solid fa-trash"></i>
            Delete movie
        </button>
    );
}

export {DeleteFavButton};