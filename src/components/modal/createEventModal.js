import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ui, calendar } from 'state-manager/actions';
import useForm from 'hooks/useForm';
import moment from 'moment';
import { MAX_CHARS_EVENT_DESCRIPTION } from 'fixtures';


// UI
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { DateTimePicker } from '@material-ui/pickers';




const useStyles = makeStyles(theme => ({

  form: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(1),
  },
  inputField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  textArea: {
    minHeight: 140
  },
  buttonColorSecondary: {
    color: theme.palette.secondary.dark,
    borderColor: theme.palette.secondary.dark,
  },
  buttonColorWarning: {
    color: theme.palette.warning.dark,
    borderColor: theme.palette.warning.dark,
  }
}));



const initialValues = {
  start: moment().minutes(0).seconds(0).add(1, 'h'),
  end: moment().minutes(0).seconds(0).add(2, 'h'),
  title: 'New Event',
  description: '',
  user: { // TODO: Remove this
    name: 'Omer Marquez',
    uid: 123456,
  }
}


const initialErrorValues = {
  // Extra values added just in case
  start: {
    error: false,
    message: null
  },
  end: {
    error: false,
    msessage: null
  },
  title: {
    error: false,
    message: null
  }
}





function CreateEventModal() {

  // TODO: Move some constant as prop values
  // TODO: Add Delete Button
  const classes = useStyles();
  const dispatch = useDispatch();
  const { activeEvent } = useSelector(state => state.calendar);
  const [error, setError] = useState(initialErrorValues);
  const [values, handleChange] = useForm(activeEvent || initialValues);
  const { start: startRaw, end: endRaw, title, description } = values;
  const [start, end] = [moment(startRaw), moment(endRaw)];


  function handleDateChange(name, value) {
    // value is a Moment object
    if (value?._isValid) {
      handleChange({ target: { name, value, } });
    }
  }

  function handleDescriptionChange({ target }) {
    if (target.value.length <= MAX_CHARS_EVENT_DESCRIPTION) {
      handleChange({ target });
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (start.isSameOrAfter(end)) {
      setError({
        ...error,
        end: {
          error: true, message: "Date can't be before the Start Date"
        }
      })
      return null;
    }

    const nonMomnetValues = {
      ...values,
      start: start.toDate(),
      end: end.toDate(),
    }

    if (activeEvent) {
      dispatch(calendar.updateEvent(nonMomnetValues));
    } else {
      dispatch(calendar.addNew(nonMomnetValues));
    }


    dispatch(ui.closeModal());
  }

  function handleCancel() {
    dispatch(ui.closeModal());
  }

  function handleDelete(){
    if(values.id){ // Just in case, but not needed
      dispatch(calendar.deleteNote(values.id));
    }
    dispatch(ui.closeModal()); 
  }



  return (
    <Card>

      <CardHeader
        title='Create a New Event'
        subtitle='Created by: User Name'
      />

      <form onSubmit={handleFormSubmit} className={classes.form}>

        <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
            <DateTimePicker
              fullWidth

              name='start'
              inputVariant='outlined'
              variant='inline'
              label='Start Date'
              invalidLabel='Date Invalid'

              error={error.start.error}
              helperText={error.start.message}
              className={classes.inputField}
              value={start.toDate()}
              onChange={date => handleDateChange('start', date)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <DateTimePicker
              fullWidth
              name='end'
              minDateMessage="Date can't be before the Start Date"
              inputVariant='outlined'
              variant='inline'
              label='End Date'
              invalidLabel='Date Invalid'

              error={error.end.error}
              helperText={error.end.message}
              className={classes.inputField}
              minDate={moment(start).add(1, 'minute').toDate()}
              value={end.toDate()}
              onChange={date => handleDateChange('end', date)}
            />
          </Grid>
        </Grid>


        <TextField
          required
          fullWidth
          name='title'
          label='Event Title'
          error={error.title.error}
          helperText={error.title.message || 'Displayed in the Calendar'}
          className={classes.inputField}
          value={title}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          multiline
          helperText={`${MAX_CHARS_EVENT_DESCRIPTION} Character max`}
          label='Event Description'
          variant='outlined'
          name='description'
          rows={5}
          className={classes.inputField}
          value={description}
          onChange={handleDescriptionChange}
        />

        <Box
          m={2}
          display='flex'
          justifyContent='space-around'
        >

          {
            activeEvent &&
            <Button
              variant='outlined'
              color='primary'
              classes={{ outlinedPrimary: classes.buttonColorWarning }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          }

          <Button
            variant='outlined'
            onClick={handleCancel}
          >
            Cancel
          </Button>


          <Button
            variant='outlined'
            color='secondary'
            classes={{ outlinedSecondary: classes.buttonColorSecondary }}
            type='submit'
          >
            {activeEvent ? 'Update' : 'Create'}
          </Button>

        </Box>

      </form>

    </Card>
  )
}


export default CreateEventModal;

