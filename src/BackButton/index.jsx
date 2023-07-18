import React from "react";

function BackButton({indexCard, setIndexCard, listLength}) {
    return(
        <button 
            onClick={() => {
                if(indexCard == 0){
                    setIndexCard(listLength-1);
                }else{
                    setIndexCard((index) => index - 1);
                }
            }}
            className="changeCardButton">
            <i class="fa-solid fa-arrow-left"></i>
        </button>
    );
}

export {BackButton}