import React from "react";

function CreateMovieButton({setOpenModal}) {
    return(
        <button 
            className="createMovieButton"
            onClick={() =>{setOpenModal(true)}}>
            +
        </button>
    );
}

export {CreateMovieButton};