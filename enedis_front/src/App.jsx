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
import AppWithImageCapture from "./components/AppWithImageCapture";
import Home from "./pages/Home";
import Signal from "./pages/Signal";
import RisqMap from "./pages/RisqMap";
import Navbar from "./components/Navbar";
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
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/connexion" element={<Connexion />} />
              <Route path="/disconnect" element={<Disconnect />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<AdminRoutes />}>
                <Route index element={<AdminPanel />} />
              </Route>
              <Route path="/camera4" element={<AppWithImageCapture />} />
              <Route path="/signal" element={<Signal />} />
              <Route path="/risq-map" element={<RisqMap />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </div>
    </MapCoordContext.Provider>
  );
}

export default App;
