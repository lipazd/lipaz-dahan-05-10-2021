import {
  ADD_FAVORITE,
  REDUCE_FAVORITE,
  SET_FAVORITES,
} from "../helpers/actionTypes";
import { setLocalStoarge } from "../helpers/functions.js";

export const setFavorites = (favorite) => {
  return {
    type: SET_FAVORITES,
    payload: favorite,
  };
};
export const addFavoriteAction = (favoriteList, newFav) => {
  return (dispatch) => {
    const newList = { ...favoriteList, [newFav.cityKey]: newFav };
    setLocalStoarge("favorites", newList);
    dispatch(addFavorite(newList));
  };
};
export const reduceFavoriteAction = (favoriteList, favKey) => {
  return (dispatch) => {
    const newList = Object.keys(favoriteList).filter((key) => key != favKey);
    const newFavList = newList.map((key) => favoriteList[key]);
    setLocalStoarge("favorites", newFavList);
    dispatch(reduceFavorite(newFavList));
  };
};

export const addFavorite = (favorite) => {
  return {
    type: ADD_FAVORITE,
    payload: favorite,
  };
};
export const reduceFavorite = (favorite) => {
  return {
    type: REDUCE_FAVORITE,
    payload: favorite,
  };
};
