import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox  from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root:{
    background: 'linear-gradient(45deg, #333, #000)',
    border: 0,
    borderRadius: 15,
    marginBotttom: 15,
    color:'white',
    padding: '5px 30px'
  }
})

const theme = createMuiTheme({
  typography:{
    h2:{
      fontSize:24,
    }
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary:{
      main: green[500],
    }
  }
})

function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample(){
  const[checked, setChecked] = React.useState(true);
  return(
  <FormControlLabel
   control = {
    <Checkbox
    checked={checked}
    icon = {<DeleteIcon/>}
    checkedIcon = {<SaveIcon/>}
    onChange = {(e)=>setChecked(e.target.checked)}
    inputProps={
      {
        'aria-label' : 'secondary checkbox'
      }
    }
    />}
    label="Testing checkbox"
  />



    // color="primary"
    // disabled
    
  )
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
    <div className="App">
      <header className="App-header">
        <Typography variant='h2'>
          Welcome to MUI
          </Typography>
          <Typography variant='subtitle1'>
            Learn how to use Material Ui
          </Typography>
        <ButtonStyled/>
        <TextField
        variant="filled"
        color='secondary'
        type="email"
        label="Email"
        // value="test@test.com"
        placeholder="test@test.com"
        />
       <CheckboxExample />
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
    </ThemeProvider>
  );
}

export default App;
