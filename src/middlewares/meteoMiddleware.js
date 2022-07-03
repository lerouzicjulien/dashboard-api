import axios from 'axios';
import { saveMeteo, GET_METEO, changeIsMeteoLoaded } from '../actions/meteo';

const meteoMiddleware = (store) => (next) => (action) => {
  const { locationToSearch } = store.getState().meteo;
  switch (action.type) {
    case GET_METEO: {
      axios.get(`https://weatherdbi.herokuapp.com/data/weather/${locationToSearch}`)
        .then((response) => {
          store.dispatch(saveMeteo(response.data));
          store.dispatch(changeIsMeteoLoaded(false));
        })
        .finally(() => {
          store.dispatch(changeIsMeteoLoaded(true));
        });
      break;
    }

    default:
  }
  next(action);
};

export default meteoMiddleware;
