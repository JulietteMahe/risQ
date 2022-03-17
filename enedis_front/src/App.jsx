import React, { useContext } from 'react';
import { MapCoordContext } from  "./context/MapCoordContext.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CameraPage1 from './pages/CameraPage1';
import CameraPage2 from './pages/CameraPage2';
import CameraPage3 from './pages/CameraPage3';
import AppWithImageCapture from './components/AppWithImageCapture';
import Home from './pages/Home';
import Signal from './pages/Signal';
import './App.css';

function App() {
    const [latitude, setLatitude] = React.useState('');
    const [longitude, setLongitude] = React.useState('');

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
      }, []);
    return (
        <MapCoordContext.Provider value={{latitude, longitude}} >
        <div className="App" >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/camera1" element={<CameraPage1 />} />
                    <Route path="/camera2" element={<CameraPage2 />} />
                    <Route path="/camera3" element={<CameraPage3 />} />
                    <Route path="/camera4" element={<AppWithImageCapture />} />
                    <Route path='/signal' element={<Signal />}/>
                </Routes>
            </BrowserRouter>
        </div>
        </MapCoordContext.Provider>
    );
}

export default App;
