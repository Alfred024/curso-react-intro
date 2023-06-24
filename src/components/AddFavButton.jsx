import React from "react";

function AddFavButton({movie, favs, setFavs}) {

    function saveFavMovie() {
        let moviesSaved = JSON.parse(favs);
        moviesSaved.push(movie);
        const moviesSavedparsed = JSON.stringify(moviesSaved);
        setFavs(moviesSavedparsed);
        console.log('Película guardada');
    }
    
    return(
        <button 
            className="changeButton"
            onClick={() =>{
                saveFavMovie();
            }}
        >
            <i class="fa-solid fa-star"></i>
            Add to favs
        </button>
    );
}

export {AddFavButton};