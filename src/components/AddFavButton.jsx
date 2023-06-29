import React from "react";

function AddFavButton({movie, favs, setFavs, show}) {

    function saveFavMovie() {
        let moviesSaved = JSON.parse(favs);
        moviesSaved.push(movie);
        const moviesSavedparsed = JSON.stringify(moviesSaved);
        console.log(moviesSavedparsed);
        setFavs(moviesSavedparsed);
        //Mostrar notificación
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