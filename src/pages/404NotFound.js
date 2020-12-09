import React from 'react';


// UI
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({

  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  margin: {
    marginLeft: theme.spacing(1.2),
    marginRight: theme.spacing(0.5),
  },
  divider_root: {
    // width: '2px',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  }
}));



function NotFoundScreen() {

  const classes = useStyles();


  return (
    <Container maxWidth='xs' className={classes.root}>
      <Grid container justify='center'>

        <Grid item className={classes.margin}>
          <Typography>404</Typography>
        </Grid>
        <Grid item className={classes.margin}>
          <Divider
            orientation="vertical"
            classes={{ root: classes.divider_root }}
          />
        </Grid>
        <Grid item className={classes.margin}>
          <Typography>The page could not be found</Typography>
        </Grid>

      </Grid>
    </Container>
  )
}


export default NotFoundScreen;

