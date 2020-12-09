import React from 'react';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// UI
import { makeStyles } from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import Container from '@material-ui/core/Container';
import CreateEventModal from './createEventModal';
import { ui } from 'state-manager/actions';



const useStyles = makeStyles(theme => ({

  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));





function CalendarModal() {

  const classes = useStyles();
  const isOpen = useSelector(state => state.ui.modalVisible);
  const dispatch = useDispatch();
  
  
  function handleClose(){
    dispatch(ui.closeModal());
  }

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Container maxWidth='sm' className={classes.root}>
        
        <CreateEventModal />

      </Container>
    </Modal>
  )
}


export default CalendarModal;

