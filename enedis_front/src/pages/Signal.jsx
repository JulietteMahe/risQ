import React from 'react';
import BasicMap from '../components/basicmap/BasicMap';
import FormSignal from '../components/formsignal/FormSignal';
import Navbar from '../components/Navbar';
import './Signal.css';

function Signal() {
  return (
    <div className="Signal">
      <div className="signalContainer">
        <FormSignal />
        <BasicMap />
      </div>
      <Navbar />
    </div>
  );
}

export default Signal;