import React from "react";
import "./Header.css";
import FormControlLabelPosition from "./Switch.jsx";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toggleChelsiusFarenheit } from "../../actions/degrees";
import { toggleDarkMode } from "../../actions/darkMode.js";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const isCelsius = useSelector((state) => state.isCelsius);
  const isNormalMode = useSelector((state) => state.isNormalMode);

  const handleClick = (e) => {
    if (e === "CelF") {
      dispatch(toggleChelsiusFarenheit(isCelsius));
    } else if (e === "dark") {
      dispatch(toggleDarkMode(isNormalMode));
    }
  };

  return (
    <div className="HeaderContainer row">
      <div className="leftHeader col-xs-12 col-sm-3">
        <Link
          to={{
            pathname: "/",
            state: { state: "" },
          }}
        >
          <div className="HeaderLogo">
            <img
              className="HeaderLogoImg"
              src={"/img/partly-cloudy-day-64 orange.png"}
            />
            <div className="HeaderLogoText">Weather Task</div>
          </div>
        </Link>
      </div>
      <div className="rightHeader col-xs-12 col-sm-9">
        <FormControlLabelPosition
          value="CelF"
          label={isCelsius ? "To farenheit" : "To celsius"}
          checked={isCelsius}
          onClick={handleClick}
        />
        <FormControlLabelPosition
          value="dark"
          label="dark mode"
          checked={!isNormalMode}
          onClick={handleClick}
        />
        <div className="favIcon">
          <Link to="/FavoriteScreen">
            <BsSuitHeartFill color="#fff" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
