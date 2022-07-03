export const SAVE_METEO = 'SAVE_METEO';
export const GET_METEO = 'GET_METEO';
export const CHANGE_LOCATION_TO_SEARCH = 'CHANGE_LOCATION_TO_SEARCH';
export const CHANGE_IS_METEO_LOADED = 'CHANGE_IS_METEO_LOADED';
export const CLEAR_METEO_STATE = 'CLEAR_METEO_STATE';

export const getMeteo = () => ({
  type: GET_METEO,
});

export const saveMeteo = (meteo) => ({
  type: SAVE_METEO,
  meteo: meteo,
});

export const changeLocationToSearch = (location) => ({
  type: CHANGE_LOCATION_TO_SEARCH,
  location: location,
});

export const clearMeteoState = () => ({
  type: CLEAR_METEO_STATE,
});

export const changeIsMeteoLoaded = (bool) => ({
  type: CHANGE_IS_METEO_LOADED,
  bool: bool,
});
