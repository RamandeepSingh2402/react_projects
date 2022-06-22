import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from '@mui/material';
import Boards from './pages/Boards';
import CreateBoard from './pages/CreateBoard';
import Navigation from './components/Navigation';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Container>
        <Switch>
          <Route path={['/', '/boards']} exact>
            <Boards />
          </Route>
          <Route path='/create-board' exact>
            <CreateBoard />
          </Route>
        </Switch>
      </Container>
    </React.Fragment>
  );
};

export default App;
