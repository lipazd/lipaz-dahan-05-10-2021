import toggleChelsiusFarenheit from "./degrees";
import weatherReducer from "./weatherData";
import loadingSpinnerReducer from "./loading";
import favorite from "./favorite";
import isNormalMode from "./darkMode";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isCelsius: toggleChelsiusFarenheit,
  weather: weatherReducer,
  loadingSpinner: loadingSpinnerReducer,
  favorite: favorite,
  isNormalMode: isNormalMode,
});

export default allReducers;
