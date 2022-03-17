import React from "react";
import Map from "../components/basicmap/Map";
import FormSignal from "../components/formsignal/FormSignal";
import "./Signal.css";

function Signal() {
  return (
    <div className="Signal">
      <div className="signalContainer">
        <FormSignal />
        <Map />
      </div>
    </div>
  );
}

export default Signal;
