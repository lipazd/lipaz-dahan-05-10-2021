import { TOGGLE_CELSIUS_FARENHEIT } from "../helpers/actionTypes";

export const toggleChelsiusFarenheit = (state) => {
  return {
    type: TOGGLE_CELSIUS_FARENHEIT,
    payload: !state,
  };
};
