import React from 'react';

// UI
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


function CalendarEvent({ event }){

  // console.log(event);
  const { title, user } = event;


  return(
    <Box>
      <Typography variant='subtitle2'>{ title }</Typography>
      <Typography variant='subtitle2'>- { user.name }</Typography>
    </Box>
  )
}


export default CalendarEvent;

