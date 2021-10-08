import React, { useEffect } from "react";
import "./MainScreen.css";
import { useSelector } from "react-redux";
import { degreesConverter } from "../../helpers/functions";

const OneDayWeather = (props) => {
  const isCelsius = useSelector((state) => state.isCelsius);
  useEffect(() => {
    if (!isCelsius) {
      degreesConverter(props.temp.Maximum.Value, "celsius");
    }
  }, [isCelsius]);

  return (
    <div className="OneDayWeatherDiv col-xs-12 col-sm-2">
      <div className="dayText">{props.day}</div>
      <div className="degrees">
        {isCelsius
          ? degreesConverter(props.temp.Maximum.Value, "farenheit") + " °C"
          : props.temp.Maximum.Value + " °F"}
      </div>
    </div>
  );
};
export default OneDayWeather;
