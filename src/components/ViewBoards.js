import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

function ViewBoards(props) {
    return (
        <section style={{ marginTop: '32px' }}>
            <Typography variant='h2' component='h2'>Boards</Typography>
            <Grid container spacing={2}>
                {props.boards.map((board) => {
                    return (
                        <Grid item xs='12' sm='12' md='4' lg='3' key={board.id}>
                            <Card elevation='6'>
                                <CardContent>
                                    <Typography component='h4' variant='h4'>
                                        {board.name}
                                    </Typography>
                                    <Typography component='p' variant='p'>
                                        {board.description}
                                    </Typography>
                                    <Button variant='contained' sx={{ marginTop: '16px' }}>
                                        View All Tasks
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </section>
    );
};

export default ViewBoards;

/**
 * We use grids, as it helps us to build responsive behaviour
 * which means, when the screen size is  resized, changes are seen accordingly
 * grid items have sizes defined
 * like for the example above, in extra small and small space, one card component occupies 12 boxes, in medium screen size, each card component has 4 boxes, and in large screen, each has 3 boxes
 * If we're getting the cross controller failed or blocked error (or anything like that)
 * then in the Controller, we have to add "@CrossOrigin", then we'll be able to call the API using the react application
 * 
*/