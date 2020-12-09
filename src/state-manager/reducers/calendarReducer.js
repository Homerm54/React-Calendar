import types from 'state-manager/types';
import moment from 'moment';



const eventListDev = { // Meanwhile
  title: 'My first event',
  start: moment().toDate(),
  end: moment().add(2, 'h').toDate(),
  id: new Date().getTime(),
  user: {
    uid: 1234,
    name: 'Omer Marquez',
  }
};



const initialState = {
  events: [eventListDev,],
  activeEvent: null, // event object

};

function calendarReducer(state = initialState, action) {

  switch (action.type) {
    case types.eventSetActive:

      return {
        ...state,
        activeEvent: action.payload.event
      };


    case types.eventDelteActive:

      return {
        ...state,
        activeEvent: null,
      }

    case types.eventAddNew:
      return {
        ...state,
        events: [
          ...state.events, action.payload.event
        ],
      };

    case types.eventDelete:

      return {
        ...state,
        events: state.events.filter(
          e => (e.id !== action.payload.id)
        ),
      }

    case types.eventUpdate:

      const { event } = action.payload;
      return {
        ...state,
        events: state.events.map(
          e => (e.id === event.id ? event : e)
        ) // Cycle through each event, and replace the selected
      };

    default:
      return state;
  };
}



export default calendarReducer;