import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
const OneFavoriteCard = (props) => {
  const isCelsius = useSelector((state) => state.isCelsius);

  return (
    <div
      className="OneFavoriteCardDiv col-xs-12 col-sm-2"
      onClick={() => props.handleFavClick(props.cityKey, props.cityName)}
    >
      <div
        className="heartIcon"
        onClick={(e) => props.handleHeartClick(e, props.cityKey)}
      >
        <BsSuitHeartFill />
      </div>
      <div className="cityName">{props.cityName}</div>
      <div className="WeatherText">{props.WeatherText}</div>
      <div className="degrees">
        {isCelsius
          ? props.temp.Metric.Value + " °C"
          : props.temp.Imperial.Value + " °F"}
      </div>
    </div>
  );
};
export default OneFavoriteCard;
