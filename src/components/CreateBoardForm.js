import { Button, TextField, Typography } from '@mui/material';
import {React, useRef} from 'react';

function CreateBoardForm(props) {
    /* ToDo: Create board name variable using useRef */
    const boardNameRef = useRef();
    const boardDescRef = useRef();

    /* ToDo: Create board description variable using useRef */

    function createBoard(e) {
        e.preventDefault();
        /* ToDo: Implement createBoard function */
        const boardName = boardNameRef.current.value;
        const boardDesc = boardDescRef.current.value;
        
        const newBoard = {
            name: boardName,
            description: boardDesc
        };

        props.createBoard(newBoard);

    };

    return (
        <section style={{ marginTop: '32px' }}>
            <Typography variant='h2' component='h2'>Create New Board</Typography>
            <form /* ToDo: Add onSubmit to call createBoard */ onSubmit={createBoard}>
                <TextField
                    id='boardName'
                    placeholder='Board Name'
                    variant='outlined'
                    required
                    fullWidth
                    margin='dense'
                    inputRef = {boardNameRef}
                    /* ToDo: Add inputRef and bind with the declared name ref variable*/ />
                <TextField
                    id='boardDesp'
                    placeholder='Board Description'
                    variant='outlined'
                    multiline
                    rows={4}
                    required
                    fullWidth
                    margin='dense'
                    inputRef={boardDescRef}
                     /* ToDo: Add inputRef and bind with the declared desp ref variable*/ />
                <Button type='submit' variant='contained' color='primary' sx={{ marginTop: '16px' }}>
                    Create Board
                </Button>
            </form>
        </section>
    );
};

export default CreateBoardForm;


// using useRef hooks
// import useRef from 'react' > create constants > use constants using 'inputRef'  
// inputRef = {constantsName}