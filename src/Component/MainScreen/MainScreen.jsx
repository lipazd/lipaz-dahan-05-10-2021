import React, { useEffect } from "react";
import "./MainScreen.css";
import Search from "../Elements/Search.jsx";
import WeatherContainer from "./WeatherContainer.jsx";

import { useDispatch } from "react-redux";
import { initalMainPageLoad } from "../../actions/weatherData";

const MainScreen = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    let key = props.location.state?.state.key;
    let cityName = props.location.state?.state.cityName;
    if (props.location.state != undefined && props.location.state) {
      dispatch(initalMainPageLoad(key, cityName));
    }
  }, []);
  return (
    <div className="MainScreenDiv">
      <div className="SearchDiv row">
        <Search />
      </div>
      <WeatherContainer />
    </div>
  );
};
export default MainScreen;
