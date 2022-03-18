import React from "react";
import Map from "../components/basicmap/Map";
import FormSignal from "../components/formsignal/FormSignal";
import AppWithImageCapture from "../components/AppWithImageCapture";
import "./Signal.css";

function Signal() {
  return (
    <div className="Signal">
      <div className="signalContainer">
        <p className="signalTitle">Signaler un risque</p>
        <Map />        
        <AppWithImageCapture />
        <FormSignal />        
      </div>
    </div>
  );
}

export default Signal;
