import {
  ADD_FAVORITE,
  SET_FAVORITES,
  REDUCE_FAVORITE,
} from "../helpers/actionTypes.js";

const favorite = (state = {}, action) => {
  switch (action.type) {
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
      };
    case REDUCE_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};

export default favorite;
