import types from '../types';
import { deleteActive } from './calendar';


export function closeModal() {

  return dispatch => {
    dispatch(deleteActive());
    dispatch({
      type: types.uiCloseModal,
    })
  }
}


export function openModal() {

  return {
    type: types.uiOpenModal,
  }
}