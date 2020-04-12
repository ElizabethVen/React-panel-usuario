import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import '../card-component/card-component-styles.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


//estilos Grid
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function Card1(props) {
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;
  
  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Avatar className={classes.orange}>N</Avatar>
        <p>{props.nombre}</p>
        <p>{props.email}</p>
        <IconButton 
          aria-label="delete"
          onClick ={ (event) => props.funcionBorrarPersona(event, props.id) }
        >
          <DeleteIcon />
        </IconButton>
        </Paper>
    </Grid>
  );
}