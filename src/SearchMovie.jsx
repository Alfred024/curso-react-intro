import React from "react";
function SearchMovie() {
    return(
        <div className="searchMovieContainer">
            <input placeholder="Search a movie  by title"></input>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    );
}

export {SearchMovie}