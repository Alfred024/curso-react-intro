import React from "react";
import ReactDOM from "react-dom";

function Modal({children}) {
    return ReactDOM.createPortal(
        <div className="movieModalContainer">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};