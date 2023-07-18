import React from "react";
import { useMoviesStoraged } from "../utils/useMoviesStoraged";

function AddFavButton({movies, setMovies, indexCard, setIndexCard}) {
    let [moviesStoraged] = useMoviesStoraged();

    function saveFavMovie() {
        setIndexCard((index) => index + 1);
        moviesStoraged.push(movies[indexCard]);
        const moviesString = JSON.stringify(moviesStoraged);
        localStorage.setItem('favsMovies', moviesString);
        setMovies(moviesStoraged);
    }
    
    return(
        <button 
            className={`changeButton ${show===1 && "hideItem"}`}
            onClick={() =>{
                saveFavMovie();
            }}
        >
            <i className="fa-solid fa-star"></i>
            Add to favs
        </button>
    );
}

export {AddFavButton};