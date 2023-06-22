import React from "react";

function BackButton({index, newIndex}) {
    

    return(
        <button 
            onClick={() => {
                if(index == 0){
                    newIndex(1);
                }else{
                    newIndex(--index);
                }
            }}
            className="changeCardButton">
            <i class="fa-solid fa-arrow-left"></i>
        </button>
    );
}

export {BackButton}