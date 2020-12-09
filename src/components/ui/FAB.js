import React from 'react';

import { useDispatch } from 'react-redux';
import { ui } from 'state-manager/actions'

// UI
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import EditIcon from '@material-ui/icons/Edit';



const useStyles = makeStyles(theme => ({

  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));



function FAB() {

  const classes = useStyles();
  const dispatch = useDispatch();
  

  function handleCreateEvent(){
    dispatch(ui.openModal());
  }


  return (
    <Fab
      color='secondary'
      aria-label='Create New Event'
      onClick={handleCreateEvent}
      className={classes.root}
    >
      <AddIcon />
    </Fab>
  )
}


export default FAB;

