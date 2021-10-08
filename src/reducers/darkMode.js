import { TOGGLE_DARK_MODE } from "../helpers/actionTypes.js";

const isNormalMode = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return action.payload;
    default:
      return state;
  }
};

export default isNormalMode;
