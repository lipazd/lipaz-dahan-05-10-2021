import { TOGGLE_CELSIUS_FARENHEIT } from "../helpers/actionTypes.js";

const toggleChelsiusFarenheit = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_CELSIUS_FARENHEIT:
      return action.payload;
    default:
      return state;
  }
};

export default toggleChelsiusFarenheit;
