import React from 'react';
import Map from '../components/basicmap/Map';
import Navbar from '../components/Navbar';
import './Signal.css';

function Signal() {
  return (
    <div className="Signal">
      <div className="signalContainer">        
        <Map />
      </div>
      <Navbar />
    </div>
  );
}

export default Signal;