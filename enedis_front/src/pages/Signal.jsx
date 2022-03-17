import React from 'react';
import BasicMap from '../components/basicmap/BasicMap';
import Navbar from '../components/Navbar';
import './Signal.css';

function Signal() {
  return (
    <div className="Signal">
      <div className="signalContainer">
        
        <BasicMap />
      </div>
      <Navbar />
    </div>
  );
}

export default Signal;