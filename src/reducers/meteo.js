import {
  CHANGE_LOCATION_TO_SEARCH,
  CHANGE_IS_METEO_LOADED,
  CLEAR_METEO_STATE,
  SAVE_METEO,
} from '../actions/meteo';

export const initialState = {
  meteo: {},
  locationToSearch: 'Bordeaux',
  isMeteoLoaded: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_METEO:
      return {
        ...state,
        cities: action.cities,
      };
    case CHANGE_LOCATION_TO_SEARCH: {
      return {
        ...state,
        location: action.location,
      };
    }
    case CHANGE_IS_METEO_LOADED: {
      return {
        ...state,
        isCityLoaded: action.bool,
      };
    }
    case CLEAR_METEO_STATE: {
      return {
        ...state,
        cities: undefined,
        endPoint: '',
        isCityLoaded: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
