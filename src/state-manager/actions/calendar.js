import types from 'state-manager/types';



export function addNew(event) {

  const { title, user, start, end } = event;
  const newEvent = {
    title, user, start, end,
    id: new Date().getTime(), // Temp, ID created by backend
  }


  return {
    type: types.eventAddNew,
    payload: {
      event: newEvent
    }
  }
}


export function deleteNote(id){

  return {
    type: types.eventDelete,
    payload: { id },
  }
}



export function setActive(event) {

  return {
    type: types.eventSetActive,
    payload: { event }
  }
}


export function deleteActive(){
  return {
    type: types.eventDelteActive
  }
}


export function updateEvent(event) {

  const toUpdateEvent = event;


  return {
    type: types.eventUpdate,
    payload: { event: toUpdateEvent }
  }
}


