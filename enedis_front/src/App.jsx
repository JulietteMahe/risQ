import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProvider from "./contexts/UserProvider";
import Disconnect from "./components/disconnect/Disconnect";
import AdminPanel from "./components/admin/admin-panel/AdminPanel";
import AdminRoutes from "./components/admin/admin-routes/AdminRoutes";
import Login from "./components/login/Login"
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
             <UserProvider>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/disconnect" element={<Disconnect />} />
                <Route path="/admin" element={<AdminRoutes />}>
                  <Route index element={<AdminPanel />} />
                </Route>
                <Route path="/camera1" element={<CameraPage1 />} />
                <Route path="/camera2" element={<CameraPage2 />} />
                <Route path="/camera3" element={<CameraPage3 />} />
                <Route path='/signal' element={<Signal />}/>
                </Routes>
             </UserProvider>
          </BrowserRouter>
        </div>
    );
}

export default App;
