import { TOGGLE_LOADING_SPINNER } from "../helpers/actionTypes.js";

const loadingSpinnerReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_LOADING_SPINNER:
      return action.payload;
    default:
      return state;
  }
};

export default loadingSpinnerReducer;
