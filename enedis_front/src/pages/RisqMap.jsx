import React from "react";
import Map from "../components/basicmap/Map";
import AppWithImageCapture from "../components/AppWithImageCapture";
import "./RisqMap.css";

function RisqMap() {
  return (
    <div className="RisqMap">
      <div className="risqMapContainer">
          <div className="risqMapText">
        <p className="risqMapTitle">Les risques dans votre secteur</p>
        <p className="risqMapTop">Une règle avant d'intervenir, le <span className="mainTop">TOP</span>!</p>
        <p className="risqTop"><span className="mainTop">3 minutes</span> d'observation</p>
        <p className="risqTop"><span className="mainTop">avant</span> de passer à l'action</p>
        </div>
        <Map />        
      </div>
    </div>
    );
}

export default RisqMap;
