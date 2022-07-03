import { combineReducers } from 'redux';
import meteoReducer from './meteo';

const rootReducer = combineReducers({
  meteo: meteoReducer,
});

export default rootReducer;
