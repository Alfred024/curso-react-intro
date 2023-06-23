import React from "react";

function AddFavButton({movie, favMovies}) {

    function saveFavMovie() {
        let moviesSaved = localStorage.getItem("favsMovies");
        if(favMovies != null){
            moviesSaved += `,${JSON.stringify(movie)}`;
        }else{
            moviesSaved = `${JSON.stringify(movie)}`;
        }
        
        localStorage.setItem("favsMovies", moviesSaved);
        console.log('Película agregada');
        //displayFavMovies(JSON.parse(moviesSaved));
    }
    
    return(
        <button 
            className="changeButton"
            onClick={() =>{
                saveFavMovie();
                // console.log(JSON.stringify(movie));
                // console.log('Movie saved');
            }}
        >
            <i class="fa-solid fa-star"></i>
            Add to favs
        </button>
    );
}

export {AddFavButton};