import React from "react";
import { Modal } from "./Modal";
import { CreateMovieModal } from "./CreateMovieModal";

function CreateMovieButton() {
    const [showModal, setShowModal] = React.useState(false);

    return(
        <div>
            {showModal ? ( 
                <Modal>
                    <CreateMovieModal
                       setShowModal = {setShowModal} 
                    />
                </Modal>
            ) : (
                <button 
                    className="createMovieButton"
                    onClick={() =>{setShowModal(true)}}>
                    +
                </button>
            )}
        </div>
        
    );
}

export {CreateMovieButton};