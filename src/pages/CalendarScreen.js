import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { calendar, ui } from 'state-manager/actions';
import moment from 'moment';


import { LAST_CALENDAR_VIEW } from 'fixtures'; 
import CalendarModal from 'components/modal';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { CALENDAR_MESSAGES_EN } from 'components/calendar/calendar_messages';
import CalendarEvent from 'components/calendar/CalendarEvent';
import eventStyleGenerator from 'components/calendar/eventStyleGenerator';
import Box from '@material-ui/core/Box';
import FAB from 'components/ui/FAB';






const localizer = momentLocalizer(moment);

function CalendarScreen() {

  
  const { events } = useSelector(state => state.calendar);
  const dispatch = useDispatch();
  const [view, setView] = useState(
    localStorage.getItem(LAST_CALENDAR_VIEW) || 'month'
  );




  function handleSelect(event) {
    dispatch(calendar.setActive(event));
    dispatch(ui.openModal());
  }

  function handleViewChange(event) {
    localStorage.setItem(LAST_CALENDAR_VIEW, event);
    setView(event);
  }


  

  return (
    <>
      <Box height='100%' mt={2}>

        <Calendar
          // Calendar Action Handlers
          onSelectEvent={handleSelect}
          onView={handleViewChange}

          // Configuration
          startAccessor="start"
          endAccessor="end"
          view={view} // React State handle the change now
          events={events}
          localizer={localizer}
          messages={CALENDAR_MESSAGES_EN}

          // Customization
          eventPropGetter={eventStyleGenerator}
          components={{ event: CalendarEvent }}
        />

      </Box>

      <FAB />
      
      <CalendarModal />
    </>
  )
}


export default CalendarScreen;

