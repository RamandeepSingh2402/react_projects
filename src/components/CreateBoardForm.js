import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

function CreateBoardForm(props) {
    /* ToDo: Create board name variable using useRef */
    /* ToDo: Create board description variable using useRef */

    function createBoard(e) {
        e.preventDefault();
        /* ToDo: Implement createBoard function */
    };

    return (
        <section style={{ marginTop: '32px' }}>
            <Typography variant='h2' component='h2'>Create New Board</Typography>
            <form /* ToDo: Add onSubmit to call createBoard */>
                <TextField
                    id='boardName'
                    placeholder='Board Name'
                    variant='outlined'
                    required
                    fullWidth
                    margin='dense'
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
                     /* ToDo: Add inputRef and bind with the declared desp ref variable*/ />
                <Button type='submit' variant='contained' color='primary' sx={{ marginTop: '16px' }}>
                    Create Board
                </Button>
            </form>
        </section>
    );
};

export default CreateBoardForm;