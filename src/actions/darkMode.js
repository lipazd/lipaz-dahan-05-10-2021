import { TOGGLE_DARK_MODE } from "../helpers/actionTypes";
import { setLocalStoarge, getFromLocalStoarge } from "../helpers/functions";

export const toggleDarkMode = (state) => {
  return (dispatch) => {
    setLocalStoarge("darkMode", !state);
    dispatch(changeDarkMode(state));
  };
};

export const changeDarkMode = (state) => {
  return {
    type: TOGGLE_DARK_MODE,
    payload: !state,
  };
};

export const setDarkMode = (state) => {
  return {
    type: TOGGLE_DARK_MODE,
    payload: state,
  };
};
