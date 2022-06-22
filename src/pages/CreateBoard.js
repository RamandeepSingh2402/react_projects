import React from 'react';
import CreateBoardForm from '../components/CreateBoardForm';

function CreateBoard() {

    /* ToDo: Create history object with useHistory hook for navigation */

    function createBoardHandler(board) {
        /* ToDo: Implement createBoardHandler function and navigate to /boards  */
    }

    return (
        <CreateBoardForm /* ToDo: Pass the createBoardHandler function as props */ />
    );
};

export default CreateBoard;