import {
  SET_CURRENT_WEATHER,
  SET_FORCAST_WEATHER,
  SET_CURRENT_CITY,
  SET_CURRENT_CITY_KEY,
} from "../helpers/actionTypes.js";

const weatherDataReducer = (
  state = { currentWeather: {}, forcastWeather: [] },
  action
) => {
  switch (action.type) {
    case SET_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.payload,
      };
    case SET_FORCAST_WEATHER:
      return {
        ...state,
        forcastWeather: action.payload,
      };
    case SET_CURRENT_CITY:
      return {
        ...state,
        currentCityName: action.payload,
      };
    case SET_CURRENT_CITY_KEY:
      return {
        ...state,
        currentCityKey: action.payload,
      };
    default:
      return state;
  }
};

export default weatherDataReducer;
