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
  
export default function AddUserComponent(props) {
    const classes = useStyles();
  
    return (
      <form className={'contenedor1 ${classes.root}'}  noValidate autoComplete="off" >
        <TextField 
        onChange ={ props.funcionObtenerPersona} /*cada que haya un cambio en el textfield se ejecuta la funcionObtenerPersona*/
        id="outlined-basic" 
        label="Agregar Usuario" 
        value={props.nombre}
        error= {props.validacion}
        helperText={props.mensajeError}
        variant="outlined" />
        <TextField 
        onChange ={ props.funcionObtenerEmail}
        className="espacio"
        id="outlined-basic" 
        label="Email" 
        value= {props.email}
        error= {props.validacion}
        helperText={props.mensajeError}
        variant="outlined" />
        <ButtonAddUser funcionAgregar={props.funcionAgregar}/>
      </form>
    );
  }
