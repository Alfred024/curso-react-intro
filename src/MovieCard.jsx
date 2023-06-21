import React from "react";

function MovieCard({title, year, poster}) {
    return(
        <article>
            <img src={poster} alt="Película img" />
            <h2>{`Title: ${title}`}</h2>
            <p>{year}</p>
        </article>
    );
}

export {MovieCard}