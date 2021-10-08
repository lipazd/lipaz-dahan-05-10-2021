const BaseURL = "https://dataservice.accuweather.com/";
const APIKey = "qOAEVVhrhXRmuYD2bp3XzDGjA8nbt3mm";
export const fetchCityKeyURL = (latitude, longitude) => {
  return `${BaseURL}locations/v1/cities/geoposition/search?apikey=${APIKey}&q=${latitude}%2C${longitude}`;
};

export const fetchCurrentWeatherByCityKeyUrl = (cityKey) => {
  return `${BaseURL}currentconditions/v1/${cityKey}?apikey=${APIKey}`;
};
export const fetchForcastWeatherByCityKey = (cityKey) => {
  return `${BaseURL}forecasts/v1/daily/5day/${cityKey}?apikey=${APIKey}`;
};
export const fetchCityKeyByName = (cityName) => {
  return `${BaseURL}locations/v1/cities/autocomplete?apikey=${APIKey}&q=${cityName}`;
};

export const daysArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
