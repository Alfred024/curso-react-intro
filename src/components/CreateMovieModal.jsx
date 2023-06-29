import React from "react";

function CreateMovieModal() {
    return (
        <form>
          <label className="labelTitle">Añade una película</label>
          
          <input 
            placeholder="Nombre de la película"
            type="text" />
          <input 
            placeholder="Año de lanzamiento"
            type="text" />
          <input 
            placeholder="Url del poster"
            type="url" />
          <div className="TodoForm-buttonContainer">
            <button
              type="button"
              className="TodoForm-button TodoForm-button--cancel"
              
            >Cancelar</button>
            <button
              type="submit"
              className="TodoForm-button TodoForm-button--add"
            >Añadir</button>
          </div>
        </form>
    );
}

export {CreateMovieModal};