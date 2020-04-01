import React from 'react';
import Card1 from '../card-component/card-component';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

    const CardContainer = (props) => {
        const classes = useStyles();
        return(
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {
                            props.personas.map( persona => <Card1 nombre= {persona.name} email={persona.email} />)
                        }
                    </Grid>
                </div>
        );
    };

    export default CardContainer;