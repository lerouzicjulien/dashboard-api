import axios from 'axios';
import { saveMeteo, GET_METEO, changeIsMeteoLoaded } from '../actions/meteo';

const meteoMiddleware = (store) => (next) => (action) => {
  const { locationToSearch } = store.getState().meteo;
  console.log('je suis le middlewareMeteo', locationToSearch);
  switch (action.type) {
    case GET_METEO: {
      console.log('je suis l\'appel à l\'api');
      axios.get(`https://weatherdbi.herokuapp.com/data/weather/${locationToSearch}`)
        .then((response) => {
          store.dispatch(saveMeteo(response.data));
          store.dispatch(changeIsMeteoLoaded(true));
        })
        .finally(() => {
          store.dispatch(changeIsMeteoLoaded(false));
        });
      break;
    }

    default:
  }
  next(action);
};

export default meteoMiddleware;
