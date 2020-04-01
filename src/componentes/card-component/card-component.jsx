import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
}));

export default function Card1(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  
  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <p>{props.nombre}</p>
        <p>{props.email}</p>
        </Paper>
    </Grid>
  );
}