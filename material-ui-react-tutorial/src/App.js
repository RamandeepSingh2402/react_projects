import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox  from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import TextField from '@material-ui/core/TextField';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import AppBar  from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';

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
    <Container maxWidth="sm">
       {/* for maxWidth, sm means small which is for 700 px, xs is for mobile size, md is for medium size, and lg is for larger size */}
      <div className="App">
        <header className="App-header">
          <AppBar color="secondary">
            <Toolbar>
              <IconButton>
                <MenuIcon/>
              </IconButton>

              <Typography variant ="h6">
                MUI Theming
              </Typography>
              <Button>
                Login
              </Button>

            </Toolbar>
          </AppBar>


          <Typography variant='h2'>
            Welcome to MUI
          </Typography>
          <Typography variant='subtitle1'>
            Learn how to use Material Ui
          </Typography>
          <ButtonStyled/>
          {/* Grid can either be a container or it can be an item */}
          <Grid container>
          <Grid item xs={12} sm={6} >
            <Paper style={{ height:100, width:'100%', color:'white' }} />
          </Grid>
          <Grid item lg={3}>
            <Paper style={{ height:100, width:50, color:'white' }} />
          </Grid>
          <Grid item lg={3}>
            <Paper style={{ height:100, width:50, color:'white' }} />
          </Grid>
          </Grid>
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
    </Container>
    </ThemeProvider>
  );
}

export default App;
