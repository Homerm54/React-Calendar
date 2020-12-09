import types from 'state-manager/types';


const initialState = {

  modalVisible: false,
}



function uiReducer(state = initialState, action) {

  switch (action.type) {
    case types.uiOpenModal:

      return {
        ...state,
        modalVisible: true
      };

    case types.uiCloseModal:

      return {
        ...state,
        modalVisible: false
      };

    default:
      return state;
  }

}


export default uiReducer;