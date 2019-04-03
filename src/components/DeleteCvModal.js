import React from 'react';

import Modal from './Modal';

function DeleteCvModal (props) {
    return <Modal isOpen={props.isOpen} onClose={props.onClose}> 
        <div className="DeleteCvModal">
            <h1>Are you sure?</h1>
            <p>You are about to delete this CV.</p>

            <div>
                <button onClick={props.onDeleteCv} className="btn btn-danger mr-4">Delete</button>
                <button onClick={props.onClose} className="btn btn-primary">Cancel</button>
            </div>
        </div>
    </Modal>
}

export default DeleteCvModal;