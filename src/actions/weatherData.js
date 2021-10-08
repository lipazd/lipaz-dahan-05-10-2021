import {
  SET_CURRENT_WEATHER,
  SET_FORCAST_WEATHER,
  SET_CURRENT_CITY_KEY,
  SET_CURRENT_CITY,
} from "../helpers/actionTypes";
import {
  getCityKeyAndName,
  getCurrentWeatherByCityKey,
  getForcastWeatherByCityKey,
  getCityKeyByName,
} from "../helpers/httpFunctions";
import { getFromLocalStoarge, swalError } from "../helpers/functions";
import { toggleLoadingSpinner } from "./loading";
import { setFavorites } from "./favorite";
export {swalError} from '../helpers/functions';
export const initalMainPageLoad = (key = "", name = "") => {
  return async (dispatch) => {
    try{
    dispatch(toggleLoadingSpinner(true));
    let cityName;
    let cityKey;
    let cityKeyAndName;
    if (key === "") {
      const favorites = getFromLocalStoarge("favorites");
      dispatch(setFavorites(favorites));

      cityKeyAndName = await getCityKeyAndName();
      cityName = `${cityKeyAndName.EnglishName} , ${cityKeyAndName.Country.ID}`;
      cityKey = cityKeyAndName.Key;
    } else {
      cityName = name;
      cityKey = key;
    }

    dispatch(setCurrentCity(cityName));
    dispatch(setCurrentCityId(cityKey));

    const currentWeather = await getCurrentWeatherByCityKey(cityKey);
    dispatch(setCurrentWeather(currentWeather));

    const forcastWeather = await getForcastWeatherByCityKey(cityKey);
    dispatch(setForcastWeather(forcastWeather));
  }catch{
    swalError();
  }finally{
    dispatch(toggleLoadingSpinner(false));
  }
  };
};

export const searchByCity = (cityName) => {
  return (dispatch) => {
    const cityKey = getCityKeyByName(cityName);
    dispatch(initalMainPageLoad(cityKey, cityName));
  };
};

export const setCurrentWeather = (currentWeather) => {
  return {
    type: SET_CURRENT_WEATHER,
    payload: currentWeather,
  };
};
export const setForcastWeather = (forcastWeather) => {
  return {
    type: SET_FORCAST_WEATHER,
    payload: forcastWeather,
  };
};
export const setCurrentCity = (CurrentCity) => {
  return {
    type: SET_CURRENT_CITY,
    payload: CurrentCity,
  };
};
export const setCurrentCityId = (CurrentCityKey) => {
  return {
    type: SET_CURRENT_CITY_KEY,
    payload: CurrentCityKey,
  };
};
