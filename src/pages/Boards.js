import {React, useEffect, useState} from 'react';
import ViewBoards from '../components/ViewBoards';

function Boards() {
    /* ToDo: Create state using useState hook for boards data */
    const [boardsData, setBoardsData] = useState([]);

    function getAllBoards() {
        /* ToDo: Implement getAllBoards function */
        fetch('http://localhost:3000/board').then(response => response.json()).then(boards => {
            setBoardsData(boards);
        })
    };

    /* ToDo: Use useEffect hook to call getAllBoards() */
    useEffect(function(){
        getAllBoards();
    },[])

    return (
        <section>
            <ViewBoards /* ToDo: Pass the state variable as props */ boards={boardsData}/>
        </section>
    );
};

export default Boards;

// we'll be using fetch to call the api here as well
// there are two things to call an API:
// to call an API when the page loads
// to call an API when a button is pressed
// for forms, we need to call the API when the user presses submit button
// for boards, we need to call the API when the component loads (useEffect and useState hooks) 
// useState is the Hook that allows you to set the state
// useEffect is the hook that allows you to call the API as soon as the component loads
// state variable is going to help us store the data that we fetch form the Backend and we'll use that variable to 


// for the useEffect, we're using a blank array because we want to call the array only once, we dont want to keep calling the API



// FETCH:
// Fetch will be getting promise and the promise is resolved using the "then" keyword