import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FavoriteScreen from "./Component/FavoriveScreen/FavoriteScreen.jsx";
import MainScreen from "./Component/MainScreen/MainScreen.jsx";
import Header from "./Component/Elements/Header.jsx";
import LoadingSpinner from "./Component/LoadingSpinner/LoadingSpinner";
import { initalMainPageLoad } from "./actions/weatherData";
import { setDarkMode } from "./actions/darkMode";
import { getFromLocalStoarge } from "./helpers/functions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Interpolator } from "react-apply-darkmode";

function App() {
  // git2
  // lipaz msg
  const loadingSpinner = useSelector((state) => state.loadingSpinner);
  const isNormalMode = useSelector((state) => state.isNormalMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initalMainPageLoad());
    const isDarkMode = getFromLocalStoarge("darkMode");
    if (isDarkMode === null || isDarkMode === undefined || isDarkMode === "") {
      return dispatch(setDarkMode(true));
    }
    dispatch(setDarkMode(isDarkMode));
  }, []);

  return (
    <Interpolator
      appearance="dark"
      watchSystem={isNormalMode}
      filter={{ brightness: 100, contrast: 90, sepia: 10 }}
    >
      <div className="App">
        {loadingSpinner && <LoadingSpinner />}
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={MainScreen} />
            <Route path="/FavoriteScreen" component={FavoriteScreen} />
          </Switch>
        </Router>
      </div>
    </Interpolator>
  );
}

export default App;
