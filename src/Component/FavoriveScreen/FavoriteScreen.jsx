import React, { useState, useEffect } from "react";
import "./FavoriteScreen.css";
import OneFavoriteCard from "./OneFavoriteCard";
import { useSelector, useDispatch } from "react-redux";
import { reduceFavoriteAction } from "../../actions/favorite.js";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const FavoriteScreen = (props) => {
  const favList = useSelector((state) => state.favorite.favorites);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleFavClick = (key, cityName) => {
    history.push("/", { state: { key, cityName } });
  };
  const handleHeartClick = (e, key) => {
    e.stopPropagation();
    Swal.fire({
      title: "Are you sure?",
      text: "It will no longer appear in your Favorites",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(reduceFavoriteAction(favList, key));
        Swal.fire(
          "Deleted!",
          "Your favorite city has been deleted.",
          "success"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your favorite city is safe :)", "error");
      }
    });
  };
  return (
    <div>
      <div className="row favoriteCards">
        {favList !== undefined &&
        favList !== null &&
        Object.keys(favList).length > 0 ? (
          Object.keys(favList).map((oneFav, key) => {
            return (
              <OneFavoriteCard
                key={favList[oneFav].cityKey}
                cityKey={favList[oneFav].cityKey}
                cityName={favList[oneFav].cityName}
                WeatherText={favList[oneFav].WeatherText}
                temp={favList[oneFav].temperature}
                handleHeartClick={handleHeartClick}
                handleFavClick={handleFavClick}
              />
            );
          })
        ) : (
          <div className="noFavorites">There is no favorites yet.</div>
        )}
      </div>
    </div>
  );
};
export default FavoriteScreen;
