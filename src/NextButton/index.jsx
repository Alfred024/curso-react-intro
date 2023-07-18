import React from "react";

function NextButton({indexCard, setIndexCard, listLength}) {
    return(
        <button 
            onClick={() => {
                if(indexCard == listLength-1){
                    setIndexCard(0);
                }else{
                    setIndexCard((index) => index + 1);
                }
            }}
            className="changeCardButton">
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    );
}

export {NextButton}