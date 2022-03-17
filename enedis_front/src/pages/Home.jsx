import React from 'react';
import camera from '../components/camera';
import Geo from '../components/Geo';
import './Home.css';

function Home() {
    camera.startCamera();
    camera.takeSnapshot();

  return (
    <div className="Home">
      <div className="homeContainer">
      <camera />
        <Geo />         
      </div>
    </div>
  );
}

export default Home;