import React from 'react';
import ViewBoards from '../components/ViewBoards';
import boards from '../dummy/dummyBoards';

function Boards() {
    /* ToDo: Create state using useState hook for boards data */

    function getAllBoards() {
        /* ToDo: Implement getAllBoards function */
    };

    /* ToDo: Use useEffect hook to call getAllBoards() */

    return (
        <section>
            <ViewBoards /* ToDo: Pass the state variable as props */ boards={boards}/>
        </section>
    );
};

export default Boards;