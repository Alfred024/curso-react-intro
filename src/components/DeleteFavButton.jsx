import React from "react";

function DeleteFavButton({movieIndex, favs, setFavs, show}) {

    function deleteFavMovie() {
        let moviesSaved = JSON.parse(favs);
        moviesSaved.splice(movieIndex,1);
        const moviesSavedparsed = JSON.stringify(moviesSaved);
        setFavs(moviesSavedparsed);
        console.log('Película borrada');
        //Aquí debería tener una forma de mostrar e npantalla un tipo de notificación        
    }

    return(
        <button
            className={`changeButton ${show === 0 && "hideButton"}`}
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