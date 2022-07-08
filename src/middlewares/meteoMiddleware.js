import axios from 'axios';
import { saveMeteo, GET_METEO, changeIsMeteoLoaded } from '../actions/meteo';

const meteoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_METEO: {
      axios.get(`https://weatherdbi.herokuapp.com/data/weather/${action.location}`)
        .then((response) => {
          store.dispatch(saveMeteo(response.data));
          store.dispatch(changeIsMeteoLoaded(true));
        });
      break;
    }

    default:
  }
  next(action);
};

export default meteoMiddleware;
