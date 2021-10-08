import {
  fetchCityKeyURL,
  fetchCurrentWeatherByCityKeyUrl,
  fetchForcastWeatherByCityKey,
  fetchCityKeyByName,
} from "./consts";

export const getFunction = (url) => {
  return fetch(url).then((response) => response.json());
};
export const getGeolocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
export const getCityKeyAndName = async () => {
  const { coords } = await getGeolocation();
  const cityKeyAndName = await fetchCityKey(coords.latitude, coords.longitude);
  const { EnglishName, Key, Country } = cityKeyAndName;
  let data = {
    EnglishName,
    Key,
    Country,
  };
  return data;
};
export const fetchCityKey = (latitude, longitude) => {
  const fetchURL = fetchCityKeyURL(latitude, longitude);
  return getFunction(fetchURL).then((data) => data);
};

export const getCurrentWeatherByCityKey = async (cityKey) => {
  const fetchURL = fetchCurrentWeatherByCityKeyUrl(cityKey);
  const currentWeatherData = await getFunction(fetchURL).then((data) => data);
  const { IsDayTime, Temperature, WeatherIcon, WeatherText } =
    currentWeatherData[0];
  let data = {
    IsDayTime,
    Temperature,
    WeatherIcon,
    WeatherText,
  };
  return data;
};

export const getForcastWeatherByCityKey = async (cityKey) => {
  let fetchURL = fetchForcastWeatherByCityKey(cityKey);
  const { DailyForecasts } = await getFunction(fetchURL);
  let arr = [];
  DailyForecasts.map((day, key) => {
    arr.push(day.Temperature);
  });
  return arr;
};

export const getCityKeyByName = async (cityName) => {
  let fetchURL = fetchCityKeyByName(cityName);
  const result = await getFunction(fetchURL);
  console.log(result);
  if (!result.length) return [];
  const cities = result.map(({ Key, LocalizedName, Country }) => ({
    Key,
    title: `${LocalizedName}, ${Country.ID}`,
    LocalizedName,
  }));
  return cities;
};
