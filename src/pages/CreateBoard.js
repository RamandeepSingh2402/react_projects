import React from 'react';
import { useHistory } from 'react-router-dom';
import CreateBoardForm from '../components/CreateBoardForm';

function CreateBoard() {

    /* ToDo: Create history object with useHistory hook for navigation */
    const history = useHistory();

    function createBoardHandler(board) {
        /* ToDo: Implement createBoardHandler function and navigate to /boards  */
        // just need to add the correct url for the API used to FETCH
        fetch('http://localhost:3000/board',{
            method:'POST',
            body: JSON.stringify(board),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(() => history.replace('/boards'))
    }

    return (
        <CreateBoardForm /* ToDo: Pass the createBoardHandler function as props */ createBoard = {createBoardHandler} />
    );
};

export default CreateBoard;