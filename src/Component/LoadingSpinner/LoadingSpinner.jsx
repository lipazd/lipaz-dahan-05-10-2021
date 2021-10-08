import React from "react";
import Loader from "react-loader-spinner";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loadingspinner_div">
      <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
    </div>
  );
};
export default LoadingSpinner;
