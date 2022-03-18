import React from "react";
import { MapCoordContext } from "./context/MapCoordContext.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProvider from "./contexts/UserProvider";
import Disconnect from "./components/disconnect/Disconnect";
import Connexion from "./pages/connexion/Connexion";
import AdminPanel from "./components/admin/admin-panel/AdminPanel";
import AdminRoutes from "./components/admin/admin-routes/AdminRoutes";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import CameraPage1 from "./pages/CameraPage1";
import CameraPage2 from "./pages/CameraPage2";
import CameraPage3 from "./pages/CameraPage3";
import AppWithImageCapture from "./components/AppWithImageCapture";
import Home from "./pages/Home";
import Signal from "./pages/Signal";
import Nav from "./components/Navbar";
import "./App.css";
import FormSignal from "./components/formsignal/FormSignal.jsx";

function App() {
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);
  return (
    <MapCoordContext.Provider value={{ latitude, longitude }}>
      <div className="App">
        <UserProvider>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/connexion" element={<Connexion />} />
              <Route path="/disconnect" element={<Disconnect />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<AdminRoutes />}>
                <Route index element={<AdminPanel />} />
              </Route>
              <Route path="/camera1" element={<CameraPage1 />} />
              <Route path="/camera2" element={<CameraPage2 />} />
              <Route path="/camera3" element={<CameraPage3 />} />
              <Route path="/camera4" element={<AppWithImageCapture />} />
              <Route path="/signal" element={<Signal />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </div>
    </MapCoordContext.Provider>
  );
}

export default App;
