import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';


// Use the enhance composer that comes with the Redux Dev Tools or the
// default composer from redux, if no Dev Tools installed
const enhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;



const store = createStore(
  reducer,
  enhancer(applyMiddleware(thunk))
);


export default store;