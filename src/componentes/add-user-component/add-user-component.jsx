import React from 'react';
import './add-user-component-styles.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonAddUser from '../add-user-component/buttom/button-add-user-component'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flex:1,
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
  
export default function AddUserComponent() {
    const classes = useStyles();
  
    return (
      <form className={'contenedor1 ${classes.root}'}  noValidate autoComplete="off" >
        <TextField id="outlined-basic" label="Agregar" variant="outlined" />
        <ButtonAddUser/>
      </form>
    );
  }
