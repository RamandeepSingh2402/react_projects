import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import CheckBox from '@material-ui/core/Checkbox';

function CheckBoxExample(){
  const[checked, setChecked] = React.useState(true)
  return (
    <div>
      <CheckBox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        color="secondary"
        inputProps={
          {
            'aria-label':'primary checkbox'
          }
        }
      />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckBoxExample/>
      <ButtonGroup
        size="large"
        onClick={() => alert("The button was clicked")} 
        variant ="contained" 
        color="secondary"
      >
        <Button 
        size="large"
        startIcon={<SaveIcon/>}
        >
          Save
        </Button>
        <Button 
        startIcon={<DeleteIcon/>}
        >
          Discard
        </Button>
      </ButtonGroup> 
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
