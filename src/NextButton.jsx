import React from "react";

function NextButton({index, newIndex}) {
    return(
        <button 
            onClick={() => {
                if(index == 1){
                    newIndex(0);
                }else{
                    newIndex(++index);
                }
            }}
            className="changeCardButton">
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    );
}

export {NextButton}