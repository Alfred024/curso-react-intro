import React from "react";

function SearchMovie({movie, setMovie}) {
    return(
        <div className="searchMovieContainer">
            <input 
                value={movie}
                onChange={(typing) => {
                    let inputVal = typing.target.value;
                    setMovie(inputVal);
                }} 
                placeholder="Search a movie  by title"></input>
            <button class="fa-solid fa-magnifying-glass"></button>
        </div>
    );
}

export {SearchMovie}