import React from "react";
import Map from "../components/basicmap/Map";
import AppWithImageCapture from "../components/AppWithImageCapture";
import "./RisqMap.css";

function RisqMap() {
  return (
    <div className="RisqMap">
      <div className="risqMapContainer">
        <p className="risqMapTitle">Les risques dans votre secteur</p>
        <Map />        
      </div>
    </div>
    );
}

export default RisqMap;
