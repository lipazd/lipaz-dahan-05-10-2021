import React, { useEffect, useState } from "react";
import "./MainScreen.css";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import OneDayWeather from "./OneDayWeather.jsx";
import { getTodayDay, getFromLocalStoarge } from "../../helpers/functions";
import { useSelector, useDispatch } from "react-redux";
import { daysArr } from "../../helpers/consts";
import Swal from "sweetalert2";
import {
  addFavoriteAction,
  reduceFavoriteAction,
} from "../../actions/favorite";

const WeatherContainer = (props) => {
  const dispatch = useDispatch();
  const isCelsius = useSelector((state) => state.isCelsius);
  const weather = useSelector((state) => state.weather);
  const favorites = useSelector((state) => state.favorite.favorites);
  const temperature = weather.currentWeather.Temperature;
  const WeatherText = weather.currentWeather.WeatherText;
  const forcastWeather = weather.forcastWeather;
  const dayNum = getTodayDay();

  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteIcon = async () => {
    if (favorites != null && favorites != undefined && favorites != "") {
      if (favorites[String(weather.currentCityKey)]) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  };
  useEffect(() => {
    favoriteIcon();
  }, [weather.currentCityKey]);

  const handleHeartClick = () => {
    let favObj = getFromLocalStoarge("favorites");
    if (!isFavorite) {
      if (favObj == null) {
        favObj = {};
      }
      let newFav = {
        cityName: weather.currentCityName,
        cityKey: weather.currentCityKey,
        temperature: weather.currentWeather.Temperature,
        WeatherText: WeatherText,
      };

      dispatch(addFavoriteAction(favObj, newFav));
      Swal.fire("", "added to favorites", "success");
    } else if (isFavorite) {
      if (favObj === null) {
        favObj = {};
        return;
      }
      dispatch(reduceFavoriteAction(favObj, weather.currentCityKey));
      Swal.fire("", "remove from favorites", "success");
    }
    setIsFavorite((prevCheck) => !prevCheck);
  };

  return (
    <div className="weatherContainerDiv">
      <div className="topWeatherContainerDiv row">
        <div className="row topContainer">
          <div className="todayWeather col-9">
            <img
              className="todayWeatherImg"
              src={"/img/map-marker-2-128.png"}
            />
            <div className="todayWeatherText">
              <div className="todayWeatherCityName">
                {weather.currentCityName}
              </div>
              {temperature && (
                <div className="todayWeatherDegrees">
                  {isCelsius
                    ? temperature.Metric.Value + " °C"
                    : temperature.Imperial.Value + " °F"}
                </div>
              )}
            </div>
          </div>
          <div onClick={handleHeartClick} className="favoriteThisCity col-3">
            {isFavorite ? (
              <BsSuitHeartFill size={60} />
            ) : (
              <BsSuitHeart size={60} />
            )}
          </div>
        </div>
        <div className="todayDesc">{WeatherText}</div>

        <div className="row">
          {forcastWeather.map((day, key) => {
            return (
              <OneDayWeather
                day={daysArr[(dayNum + key - 1) % 7]}
                temp={day}
                key={dayNum + key - 1}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default WeatherContainer;
