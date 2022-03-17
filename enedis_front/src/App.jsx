import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CameraPage1 from './pages/CameraPage1';
import CameraPage2 from './pages/CameraPage2';
import CameraPage3 from './pages/CameraPage3';
import Home from './pages/Home';
import Signal from './pages/Signal';
import './App.css';

function App() {
    return (
        <div className="App" >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/camera1" element={<CameraPage1 />} />
                    <Route path="/camera2" element={<CameraPage2 />} />
                    <Route path="/camera3" element={<CameraPage3 />} />
                    <Route path='/signal' element={<Signal />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
