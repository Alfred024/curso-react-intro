import React from "react";

function MovieCard({title, year, poster}) {
    return(
        <article className="movieCard">
            <img src={poster} alt="Película img" />

            <div>
                <h2>{`Title: ${title}`}</h2>
                <p>{`Release year: ${year}`}</p>
            </div>
        </article>
    );
}

export {MovieCard}