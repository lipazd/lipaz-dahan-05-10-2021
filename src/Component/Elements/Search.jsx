import React, { useState, useEffect, useCallback } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./search.css";
import debounce from "lodash/debounce";
import { getCityKeyByName } from "../../helpers/httpFunctions";
import { initalMainPageLoad } from "../../actions/weatherData";
import { useDispatch } from "react-redux";
import { englishOnly } from "../../helpers/functions";

const Search = () => {
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(true);
  const [notFound, setNotFound] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const getOptionsDelayed = useCallback(
    debounce((text, callback) => {
      setOptions([]);
      getOptionsAsync(text).then(callback);
    }, 500),
    []
  );

  const getOptionsAsync = (query) => {
    const res = englishOnly(query);
    if (query != "" && !res) {
      setError(false);
    } else {
      setError(true);
    }
    return new Promise((resolve) => {
      getCityKeyByName(query)
        .then((citiesOptions) => {
          console.log(citiesOptions);
          resolve(citiesOptions);
        })
        .catch((err) => console.log(err.message));
    });
  };

  useEffect(() => {
    if (firstLoad) return setFirstLoad((prevState) => !prevState);
    getOptionsDelayed(inputValue, (filteredOptions) => {
      if (filteredOptions.length === 0) {
        setNotFound(false);
      }
      setOptions(filteredOptions);
    });
  }, [inputValue, getOptionsDelayed]);

  const handleCitySearch = (e, city) => {
    console.log(city);
    if (city === "" || city === undefined || city === null) return;
    dispatch(initalMainPageLoad(city.Key, city.LocalizedName));
  };

  return (
    <div className="searchContainer">
      <Autocomplete
        options={options}
        id="SearchId"
        getOptionLabel={(option) => option.title || ""}
        filterOptions={(x) => x}
        loading={options.length === 0 && notFound}
        onChange={handleCitySearch}
        freeSolo
        onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search city .."
            variant="standard"
            size="small"
          />
        )}
      />
      {!error && <div className="errorSearch">English letters only</div>}
    </div>
  );
};
export default Search;
