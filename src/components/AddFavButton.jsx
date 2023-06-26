import React from "react";

function AddFavButton({movie, favs, setFavs, show}) {

    function saveFavMovie() {
        let moviesSaved = JSON.parse(favs);
        moviesSaved.push(movie);
        const moviesSavedparsed = JSON.stringify(moviesSaved);
        setFavs(moviesSavedparsed);
        console.log('Película guardada');
        //Aquí debería tener una forma de mostrar e npantalla un tipo de notificación        
    }
    
    return(
        <button 
            className={`changeButton ${show === 1 && "hideItem"}`}
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