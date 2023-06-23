import React from "react";

function AddFavButton({movie}) {

    function saveFavMovie() {
        localStorage.setItem("favsMovies",JSON.stringify(movie));
    }
    
    return(
        <button className="changeButton"
            onClick={() =>{
                saveFavMovie();
                console.log('Movie saved');
            }}
        >
            <i class="fa-solid fa-star"></i>
            Add to favs
        </button>
    );
}

export {AddFavButton};