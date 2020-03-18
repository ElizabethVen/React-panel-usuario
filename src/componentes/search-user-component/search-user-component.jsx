import React from 'react';
import './search-user-component-styles.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
  
export default function SearchUser() {
    const classes = useStyles();
  
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <h2>Input de busqueda de usuario</h2>
        <TextField id="outlined-basic" label="Buscar" variant="outlined" />
      </form>
    );
  }
