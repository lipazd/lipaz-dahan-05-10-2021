import { TOGGLE_LOADING_SPINNER } from "../helpers/actionTypes";

export const toggleLoadingSpinner = (state) => {
  return {
    type: TOGGLE_LOADING_SPINNER,
    payload: state,
  };
};
